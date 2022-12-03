import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lobby-map',
  templateUrl: './create-lobby-map.component.html',
  styleUrls: ['./create-lobby-map.component.scss']
})
export class CreateLobbyMapComponent implements OnInit {

  constructor() {
  }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  ngOnInit(): void {
  }

}

