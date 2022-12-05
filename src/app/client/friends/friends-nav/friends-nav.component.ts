import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-friends-nav',
  templateUrl: './friends-nav.component.html',
  styleUrls: ['./friends-nav.component.scss']
})
export class FriendsNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(path: string)
  {
    this.router.navigate([path])
  }

}
