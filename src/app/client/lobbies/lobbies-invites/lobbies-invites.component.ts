import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {TokenService} from "../../../shared/services/token/token.service";

@Component({
  selector: 'app-lobbies-invites',
  templateUrl: './lobbies-invites.component.html',
  styleUrls: ['./lobbies-invites.component.scss']
})
export class LobbiesInvitesComponent implements OnInit {

  lobbiesInvites!: any[]
  constructor(private lobbyService : LobbyService, private authService: TokenService) { }

  ngOnInit(): void {
    this.getAllLobbyInvites()
  }

  getAllLobbyInvites(){
    this.lobbyService.getAllLobbyInvites().subscribe(r=> this.lobbiesInvites = r);
  }
  acceptInvite(lobbyId: number){
    window.location.reload()
    this.lobbyService.acceptInvite(lobbyId)
  }

  declineInvite(lobbyId: number){
    window.location.reload()
    this.lobbyService.leaveLobby(this.authService.getId(),lobbyId)
  }
}
