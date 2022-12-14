import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LobbyService} from "../../../shared/services/lobby/lobby.service";

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
      latitude: 0,
      longitude: 0
    },
    maxSeats: 0,
    name: "",
    startDate: new Date(),

  }]
  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.getAllPublicLobbies()

  }

  getAllPublicLobbies(){
    this.lobbyService.getAllPublicLobbies().subscribe(r=> this.Lobbies = r)
  }
  changeLocation(lobby: any){
    this.outputToParentLobby.emit(lobby)
  }

}
