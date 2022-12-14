import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import * as L from "leaflet";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {IconOptions} from "leaflet";


@Component({
  selector: 'app-client-home-map',
  templateUrl: './client-home-map.component.html',
  styleUrls: ['./client-home-map.component.scss']
})
export class ClientHomeMapComponent implements OnInit {
  private map!: L.Map;
  @Input() lobby: any
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
  Lobbies: any[] = [{
    id: 0,
    customPlace: {
      latitude: 0,
      longitude: 0
    },
    place:{
      latitude: 0,
      longitude: 0
    },
    maxSeats: 0,
    name: "",
    startDate: new Date(),

  }]
  constructor(private lobbyService: LobbyService) { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['lobby'].currentValue){
      if(changes['lobby'].currentValue.place)this.map.flyTo([changes['lobby'].currentValue.place.latitude,changes['lobby'].currentValue.place.longitude],19)
      if(changes['lobby'].currentValue.customPlace)this.map.flyTo([changes['lobby'].currentValue.customPlace.latitude,changes['lobby'].currentValue.customPlace.longitude],19)

    }

  }
  ngAfterViewInit(): void {
    this.initMap();
    this.getAllPublicLobbies()
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
  getAllPublicLobbies(){
    this.lobbyService.getAllPublicLobbies().subscribe(r=> {
      this.Lobbies = r
      this.Lobbies.map((x)=>{
        if(x.customPlace) L.marker([x.customPlace.latitude,x.customPlace.longitude]).addTo(this.map)
        if(x.place) L.marker([x.place.latitude,x.place.longitude],this.markerOptions).addTo(this.map)
      })
    })
  }

}
