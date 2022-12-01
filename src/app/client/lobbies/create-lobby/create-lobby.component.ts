import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../shared/services/token/token.service";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";

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
  constructor(private lobbyService: LobbyService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  createLobby(lobby: any){
    this.lobbyService.createLobby(lobby);
  }
}
