import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {TokenService} from "../../../shared/services/token/token.service";
import {ClientService} from "../../../shared/services/client/client.service";

@Component({
  selector: 'app-lobbies-list',
  templateUrl: './lobbies-list.component.html',
  styleUrls: ['./lobbies-list.component.scss']
})
export class LobbiesListComponent implements OnInit {

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
              private clientService: ClientService) { }

  lobbies!: any[]
  locals!: any[]
  myLobbies!: any[]

  ngOnInit(): void {
    this.getAllPublicLobbies()
    this.getAllLocals()
    this.getMyLobby()
  }

  getAllPublicLobbies(){
    this.lobbyService.getAllPublicLobbies().subscribe(r => this.lobbies = r)
  }

  createLobby(lobby: any){
    this.lobbyService.createLobby(lobby);
  }

  getAllLocals(){
    this.clientService.getAllPlaces().subscribe(r => this.locals = r)
  }

  getMyLobby(){
    this.lobbyService.getAllOwnerLobbies().subscribe(r => this.myLobbies = r)
  }

  getLobbyById(id: number){
    this.lobbyService.getLobby(id).subscribe(r => console.log(r))
    this.lobbyService.joinLobby(this.tokenService.getId(), id).subscribe(r => console.log("Dolaczylem"))
  }

}
