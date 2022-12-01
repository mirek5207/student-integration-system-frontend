import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";

@Component({
  selector: 'app-owner-lobbies-list',
  templateUrl: './owner-lobbies-list.component.html',
  styleUrls: ['./owner-lobbies-list.component.scss']
})
export class OwnerLobbiesListComponent implements OnInit {
  lobbyStatusPublic = "Public"
  lobbyStatusPrivate = "Private"
  myLobbies!: any[]
  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.getMyLobby()
  }
  getMyLobby(){
    this.lobbyService.getAllOwnerLobbies().subscribe(r => this.myLobbies = r)
  }

}
