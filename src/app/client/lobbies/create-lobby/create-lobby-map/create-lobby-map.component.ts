import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import {PlaceService} from "../../../../shared/services/place/place.service";
import {control, IconOptions} from "leaflet";
import zoom = control.zoom;
import {GetCustomPlace, GetPlace} from "../../../../shared/interfaces/client.interface";

@Component({
  selector: 'app-create-lobby-map',
  templateUrl: './create-lobby-map.component.html',
  styleUrls: ['./create-lobby-map.component.scss']
})
export class CreateLobbyMapComponent implements AfterViewInit,OnInit  {
  displayLocal = true
  private currentLatitude!: number
  private currentLongitude!: number
  private map!: L.Map;

  @Output() outputToParent: EventEmitter<number> = new EventEmitter()
  @Output() outputToParentCustomPlace: EventEmitter<{customPlace: GetCustomPlace}> = new EventEmitter()
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
  constructor(private placeService: PlaceService) {
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

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 23,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  async getAllPlaces(){
    navigator.geolocation.getCurrentPosition(position => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongitude = position.coords.longitude;
    });
    this.placeService.getPlaces().subscribe(r => {
      this.locals = r
      this.locals.map((x)=>{
        x.distance = Number(this.getDistanceFromLatLonInKm(x.latitude, x.longitude))
        L.marker([x.latitude,x.longitude],this.markerOptions).addTo(this.map)
      })
      this.locals.sort((a,b)=>{
        return a.distance - b.distance
      })
    });
  }
  async getAllCustomPlaces(){
    navigator.geolocation.getCurrentPosition(position => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongitude = position.coords.longitude;
    });
    this.placeService.getCustomPlaces().subscribe(r => {
      this.customPlace = r
      this.customPlace.map((x)=>{
        x.distance = Number(this.getDistanceFromLatLonInKm(x.latitude, x.longitude))
        L.marker([x.latitude,x.longitude]).addTo(this.map)
      })
      this.customPlace.sort((a,b)=>{
        return a.distance - b.distance
      })
    });
  }
  changeLocation(localId:number,latitude: number,longitude: number){
    this.outputToParent.emit(localId);
    L.marker([latitude,longitude],this.markerOptions).addTo(this.map)
    this.map.flyTo([latitude,longitude],19)
  }
  changeLocationWithoutCustomMarker(customPlace: GetCustomPlace){
    this.outputToParentCustomPlace.emit({customPlace});
    L.marker([customPlace.latitude,customPlace.longitude]).addTo(this.map)
    this.map.flyTo([customPlace.latitude,customPlace.longitude],19)
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(this.currentLatitude-lat1);  // deg2rad below
    var dLon = this.deg2rad(this.currentLongitude-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(this.currentLatitude)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d.toFixed(2);
  }

  deg2rad(deg: number) {
    return deg * (Math.PI/180)
  }

  setDisplayToLocal(displayLocal: boolean){
    this.displayLocal = displayLocal
  }

}

