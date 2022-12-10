import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {TokenService} from "../../../../shared/services/token/token.service";

@Component({
  selector: 'app-guest-lobbies-list',
  templateUrl: './guest-lobbies-list.component.html',
  styleUrls: ['./guest-lobbies-list.component.scss']
})
export class GuestLobbiesListComponent implements OnInit {
  lobbyStatusPublic = "Public"
  lobbyStatusPrivate = "Private"
  myLobbies!: any[]
  constructor(private lobbyService: LobbyService, private authService: TokenService) { }

  ngOnInit(): void {
    this.getMyLobby()
  }
  getMyLobby(){
    this.lobbyService.getAllGuestLobbies().subscribe(r => this.myLobbies = r)
  }
  leaveLobby(lobbyId: number){
    window.location.reload()
    this.lobbyService.leaveLobby(this.authService.getId(),lobbyId)
  }

}
