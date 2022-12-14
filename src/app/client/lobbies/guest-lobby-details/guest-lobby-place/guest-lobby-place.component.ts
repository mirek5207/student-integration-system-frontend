import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {first, Subscription} from "rxjs";
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {ActivatedRoute} from "@angular/router";
import * as L from "leaflet";
import {IconOptions} from "leaflet";

@Component({
  selector: 'app-guest-lobby-place',
  templateUrl: './guest-lobby-place.component.html',
  styleUrls: ['./guest-lobby-place.component.scss']
})
export class GuestLobbyPlaceComponent {
  private map!: any;
  private routeSub!: Subscription;
  lobbyId!: number;
  constructor(private route: ActivatedRoute, private lobbyService: LobbyService) { }
  Lobbies: any = [{
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

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.lobbyId = params['id']
    });
    this.getLobbyById()

  }
  getLobbyById(){
    this.lobbyService.getLobby(this.lobbyId).subscribe(r=> {
      this.Lobbies = r
      if(this.Lobbies.customPlace){
        let marker = L.marker([this.Lobbies.customPlace.latitude,this.Lobbies.customPlace.longitude]).addTo(this.map)
        marker.openPopup(this.Lobbies.customPlace.name);
        this.map.panTo(L.latLng(this.Lobbies.customPlace.latitude,this.Lobbies.customPlace.longitude),15)
      }
      if (this.Lobbies.place) {
        let marker = L.marker([this.Lobbies.place.latitude, this.Lobbies.place.longitude], this.markerOptions).addTo(this.map)
        marker.bindPopup(this.Lobbies.place.name);
        this.map.panTo(L.latLng(this.Lobbies.place.latitude,this.Lobbies.place.longitude),15)
      }
    })
  }

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


  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {doubleClickZoom: false}).setView([47,18],16);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 23,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
