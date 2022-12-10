import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../shared/services/token/token.service";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {PlaceService} from "../../../shared/services/place/place.service";

@Component({
  selector: 'app-create-lobby',
  templateUrl: './create-lobby.component.html',
  styleUrls: ['./create-lobby.component.scss']
})
export class CreateLobbyComponent implements OnInit {
  lobbies!: any[]
  locals!: any[]
  registerNewLobby: any = {
    maxSeats: 0,
    name: "",
    type: "Public",
    placeId: 3,
    customPlaceId:  null,
    ownerId: this.tokenService.getId()
  }
  constructor(private lobbyService: LobbyService,
              private tokenService: TokenService,
              private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getAllPlaces()
  }

  createLobby(lobby: any){
    this.lobbyService.createLobby(lobby);
  }

  getAllPlaces(){
     this.placeService.getPlaces().subscribe(r => this.locals = r);
  }
}
