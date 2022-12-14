import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-guest-lobby-nav',
  templateUrl: './guest-lobby-nav.component.html',
  styleUrls: ['./guest-lobby-nav.component.scss']
})
export class GuestLobbyNavComponent implements OnInit {
  lobbyId!: number;
  placeId!: number;
  type!: string;
  private routeSub!: Subscription;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.lobbyId = params['id']
    });
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.type = params['type']
      this.placeId = params['placeId']
    });
  }
  navigateTo(path: string)
  {
    this.router.navigate([path], {queryParams: {id: this.lobbyId,placeId: this.placeId, type: this.type}})
  }

}
