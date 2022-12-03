import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";

@Component({
  selector: 'app-owner-lobby-details-guest-list',
  templateUrl: './owner-lobby-details-guest-list.component.html',
  styleUrls: ['./owner-lobby-details-guest-list.component.scss']
})
export class OwnerLobbyDetailsGuestListComponent implements OnInit {
  guests!: any[];
  id!: number;
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.id = params['id']
    });
    this.getLobbyGuestsById()
  }
  getLobbyGuestsById(){
    this.lobbyService.getLobbyGuests(this.id).subscribe(r => this.guests = r)
  }
}
