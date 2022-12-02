import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../shared/services/token/token.service";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";



@Component({
  selector: 'app-owner-lobby-details',
  templateUrl: './owner-lobby-details.component.html',
  styleUrls: ['./owner-lobby-details.component.scss']
})
export class OwnerLobbyDetailsComponent implements OnInit {

  constructor(private lobbyService: LobbyService, private tokenService: TokenService) { }

  ngOnInit(): void {

  }
  getLobbyById(id: number){
    this.lobbyService.getLobby(id).subscribe(r => console.log(r))
    //this.lobbyService.joinLobby(this.tokenService.getId(), id).subscribe(r => console.log("Dolaczylem"))
  }
}
