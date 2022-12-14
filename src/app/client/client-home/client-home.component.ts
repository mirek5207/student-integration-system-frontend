import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
  lobby: any;

  constructor() { }

  ngOnInit(): void {
  }

  getLobbyInformation(lobby: { lobby: any }) {
    this.lobby = lobby
  }
}
