import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LobbiesListComponent} from "../lobbies-list/lobbies-list.component";

@Component({
  selector: 'app-lobbies-nav',
  templateUrl: './lobbies-nav.component.html',
  styleUrls: ['./lobbies-nav.component.scss']
})
export class LobbiesNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(path: string)
  {
    this.router.navigate([path])
  }
}
