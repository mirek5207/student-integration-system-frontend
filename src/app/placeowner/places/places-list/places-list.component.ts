import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";
import {Router} from "@angular/router";
import {CreatePlaceComponent} from "../create-place/create-place.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {PlaceDetailsComponent} from "../place-details/place-details.component";
import {PlaceownerService} from "../../../shared/services/placeowner/placeowner.service";
import {TokenService} from "../../../shared/services/token/token.service";
import * as L from "leaflet";
import {IconOptions} from "leaflet";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  private map!: L.Map;
  places: any[] = []

  today = Date.now()
  pipe = new DatePipe('en-US')
  private iconOptions: IconOptions = // Icon options
    {
      iconUrl: '../../../../assets/red-marker.png',
      iconSize: [52, 55],
      iconAnchor: [25,48]
    };

  // Creating Marker Options
  private markerOptions = {
    title: "MyLocation",
    clickable: true,
    icon: L.icon(this.iconOptions)
  }

  constructor(private router: Router, private dialogRef : MatDialog, private placeOwnerService: PlaceownerService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getPlaces()
  }
  ngAfterViewInit(): void {
    this.initMap();

  }

  private initMap(): void {
    this.map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 23,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  openRegisterPlaceDialog(){
    this.dialogRef.open(CreatePlaceComponent, this.getRegisterDialogConfig())
  }
  openEditPlaceDialog(place: Place){
    this.dialogRef.open(PlaceDetailsComponent, this.getEditDialogConfig(place))
  }
  openPlaceReservation(placeId: number){
    this.router.navigate(['placeowner/places/reservation'], {queryParams: {placeId: placeId}})
  }
  getPlaces(){
    this.placeOwnerService.getAllPlaces(this.tokenService.getId()).subscribe(r=> {
      this.places = r
      this.places.map((x)=>{
        L.marker([x.latitude,x.longitude],this.markerOptions).addTo(this.map)
      })
    })
  }
  changeLocation(latitude: number, longitude: number) {
      this.map.flyTo([latitude,longitude],19)
  }
  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "440px";
    dialogConfig.height = "500px";
    return dialogConfig;
  }
  getEditDialogConfig(place: Place){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "580px";
    dialogConfig.data = place
    return dialogConfig;
  }

}
