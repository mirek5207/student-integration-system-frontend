import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {Router} from "@angular/router";
import * as path from "path";

@Component({
  selector: 'app-client-home-public-lobbies-list',
  templateUrl: './client-home-public-lobbies-list.component.html',
  styleUrls: ['./client-home-public-lobbies-list.component.scss']
})
export class ClientHomePublicLobbiesListComponent implements OnInit {
  @Output() outputToParentLobby: EventEmitter<{lobby: any}> = new EventEmitter()
  Lobbies: any[] = [{
    id: 0,
    customPlace: {
      latitude: 0,
      longitude: 0
    },
    place:{
      id: 0,
      latitude: 0,
      longitude: 0
    },
    maxSeats: 0,
    name: "",
    startDate: new Date(),

  }]
  constructor(private lobbyService: LobbyService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPublicLobbies()
  }
  getAllPublicLobbies(){
    this.lobbyService.getAllPublicLobbies().subscribe(r=> this.Lobbies = r)
  }
  changeLocation(lobby: any){
    this.outputToParentLobby.emit(lobby)
  }
  joinPublicLobby(lobbyId: number,placeId:number){
    this.lobbyService.joinPublicLobby(lobbyId)
    this.navigateTo('/client/lobbies/asGuest/' + lobbyId, placeId)
  }
  navigateTo(path: string, placeId: number)
  {
    let typeOfPlace;
    if(placeId == null) typeOfPlace = 'customPlace'
    else typeOfPlace = 'place'
    this.router.navigate([path],{queryParams: {placeId: placeId, type:typeOfPlace}});
  }
}
