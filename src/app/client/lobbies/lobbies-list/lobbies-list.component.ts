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

  constructor(private lobbyService: LobbyService) { }

  lobbies!: any[]
  locals!: any[]
  myLobbies!: any[]

  ngOnInit(): void {

  }
}
