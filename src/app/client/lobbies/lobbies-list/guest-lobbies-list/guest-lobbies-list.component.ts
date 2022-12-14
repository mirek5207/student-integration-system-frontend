import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {TokenService} from "../../../../shared/services/token/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guest-lobbies-list',
  templateUrl: './guest-lobbies-list.component.html',
  styleUrls: ['./guest-lobbies-list.component.scss']
})
export class GuestLobbiesListComponent implements OnInit {
  lobbyStatusPublic = "Public"
  lobbyStatusPrivate = "Private"
  myLobbies!: any[]
  constructor(private lobbyService: LobbyService, private authService: TokenService,private _router: Router) { }

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
  navigateTo(path: string, placeId: number)
  {
    let typeOfPlace;
    if(placeId == null) typeOfPlace = 'customPlace'
    else typeOfPlace = 'place'
    this._router.navigate([path],{queryParams: {placeId: placeId, type:typeOfPlace}});
  }
}
