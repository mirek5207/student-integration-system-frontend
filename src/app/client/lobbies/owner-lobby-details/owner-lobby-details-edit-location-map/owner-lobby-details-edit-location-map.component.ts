import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as L from "leaflet";
import {GetCustomPlace, GetPlace} from "../../../../shared/interfaces/client.interface";
import {IconOptions} from "leaflet";
import {PlaceService} from "../../../../shared/services/place/place.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-owner-lobby-details-edit-location-map',
  templateUrl: './owner-lobby-details-edit-location-map.component.html',
  styleUrls: ['./owner-lobby-details-edit-location-map.component.scss']
})
export class OwnerLobbyDetailsEditLocationMapComponent implements OnInit {

  displayLocal = true
  currentMarker!: any
  private map!: L.Map;

  // Creating a custom icon
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
  locals: GetPlace[] = [{
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    placeOwnerId: 0,
    distance: 0
  }]
  customPlace: GetCustomPlace[] = [{
    id: 0,
    name: "",
    latitude: 0,
    longitude: 0,
    description: 0,
    distance: 0
  }]

  constructor(private placeService: PlaceService,private dialogRef: MatDialogRef<OwnerLobbyDetailsEditLocationMapComponent>) {
  }
  ngOnInit(): void {
    this.getAllPlaces()
    this.getAllCustomPlaces()
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});
    this.map.on("click", (e) =>{
      if(this.currentMarker)this.map.removeLayer(this.currentMarker)
      this.currentMarker = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 23,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  async getAllPlaces(){
    this.placeService.getPlaces().subscribe(r => {
      this.locals = r
      this.locals.map((x)=>{
        L.marker([x.latitude,x.longitude],this.markerOptions).addTo(this.map)
      })
      this.locals.sort((a,b)=>{
        return a.distance - b.distance
      })
    });
  }
  async getAllCustomPlaces(){
    this.placeService.getCustomPlaces().subscribe(r => {
      this.customPlace = r
      this.customPlace.map((x)=>{
        L.marker([x.latitude,x.longitude]).addTo(this.map)
      })
      this.customPlace.sort((a,b)=>{
        return a.distance - b.distance
      })
    });
  }
  changeLocation(localId:number,latitude: number,longitude: number){
    L.marker([latitude,longitude],this.markerOptions).addTo(this.map)
    this.map.flyTo([latitude,longitude],19)
  }
  changeLocationWithoutCustomMarker(customPlace: GetCustomPlace){
    L.marker([customPlace.latitude,customPlace.longitude]).addTo(this.map)
    this.map.flyTo([customPlace.latitude,customPlace.longitude],19)
  }
  changePlaceToCustomPlace(placeId: number,placeName: string, latitude: number, longitude: number,description: string){
    let data = {
      placeId: placeId,
      name: placeName,
      latitude: latitude,
      longitude: longitude,
      description: description,
      type: "CustomPlace",
    }
    console.log(data)
    this.dialogRef.close(data);
  }
  changePlaceToLocal(placeId: number,placeName: string){
    let data = {
      placeId: placeId,
      type: "Local",
      name: placeName
    }
    this.dialogRef.close(data);
  }
  setDisplayToLocal(displayLocal: boolean){
    this.displayLocal = displayLocal
  }

}
