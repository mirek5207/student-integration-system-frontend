import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  InviteFriendToLobbyDialogComponent
} from "../../owner-lobby-details/owner-lobby-details-guest-list/invite-friend-to-lobby-dialog/invite-friend-to-lobby-dialog.component";

@Component({
  selector: 'app-guest-lobby-guest-list',
  templateUrl: './guest-lobby-guest-list.component.html',
  styleUrls: ['./guest-lobby-guest-list.component.scss']
})
export class GuestLobbyGuestListComponent implements OnInit {

  guests!: any[];
  id!: number;
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private lobbyService: LobbyService,private dialogRef : MatDialog) { }

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
