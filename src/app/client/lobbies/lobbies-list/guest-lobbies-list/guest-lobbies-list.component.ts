import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";

@Component({
  selector: 'app-guest-lobbies-list',
  templateUrl: './guest-lobbies-list.component.html',
  styleUrls: ['./guest-lobbies-list.component.scss']
})
export class GuestLobbiesListComponent implements OnInit {
  lobbyStatusPublic = "Public"
  lobbyStatusPrivate = "Private"
  myLobbies!: any[]
  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.getMyLobby()
  }
  getMyLobby(){
    this.lobbyService.getAllGuestLobbies().subscribe(r => this.myLobbies = r)
  }
}
