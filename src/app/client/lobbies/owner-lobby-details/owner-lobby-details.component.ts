import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../shared/services/token/token.service";
import {LobbyService} from "../../../shared/services/lobby/lobby.service";



@Component({
  selector: 'app-owner-lobby-details',
  templateUrl: './owner-lobby-details.component.html',
  styleUrls: ['./owner-lobby-details.component.scss']
})
export class OwnerLobbyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
