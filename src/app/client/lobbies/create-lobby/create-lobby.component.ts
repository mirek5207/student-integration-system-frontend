import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../shared/services/token/token.service";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {PlaceService} from "../../../shared/services/place/place.service";
import {GetCustomPlace, GetPlace} from "../../../shared/interfaces/client.interface";
import {first, Observable} from "rxjs";

@Component({
  selector: 'app-create-lobby',
  templateUrl: './create-lobby.component.html',
  styleUrls: ['./create-lobby.component.scss']
})
export class CreateLobbyComponent implements OnInit {
  placeType = "Local";
  locals$!: Observable<GetPlace[]>
  locals!: GetPlace[]
  registerNewLobby: any = {
    maxSeats: 0,
    name: "",
    startDate: new Date(),
    type: "Public",
    placeId: 3,
    customPlaceId:  null,
    ownerId: this.tokenService.getId()
  }
  registerNewLobbyWithCustomPlace: any = {
    maxSeats: 0,
    name: "",
    startDate: new Date(),
    type: "",
    customPlaceId:  null,
    customPlaceName: "",
    latitude: 0,
    longitude: 0,
    description: ""
  }

  constructor(private lobbyService: LobbyService,
              private tokenService: TokenService,
              private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getAllPlaces()
  }

  createLobby(lobby: any){
    this.lobbyService.createLobby(lobby);
    alert("Pokój został stworzony")
  }
  createLobbyAtCustomPlace(lobby:any){
    lobby.maxSeats = this.registerNewLobby.maxSeats
    lobby.name = this.registerNewLobby.name
    lobby.type = this.registerNewLobby.type
    this.lobbyService.createLobbyWithCustomPlace(lobby)
    alert("Pokój został stworzony")
  }

  getAllPlaces(){
     this.locals$ = this.placeService.getPlaces();
     this.locals$.pipe(first()).subscribe(local=>{
       this.locals = local
     })
  }

  outputToParent(placeId: number) {
    this.registerNewLobby.placeId = placeId
    console.log(placeId);
  }

  outputToParentCustomPlace(customPlace: { customPlace: GetCustomPlace }) {
    if(customPlace.customPlace.id !== 0)this.registerNewLobbyWithCustomPlace.customPlaceId = customPlace.customPlace.id
    this.registerNewLobbyWithCustomPlace.latitude = customPlace.customPlace.latitude
    this.registerNewLobbyWithCustomPlace.longitude = customPlace.customPlace.longitude
    this.registerNewLobbyWithCustomPlace.customPlaceName = customPlace.customPlace.name
    this.registerNewLobbyWithCustomPlace.description = customPlace.customPlace.description
    console.log(customPlace);
  }
}
