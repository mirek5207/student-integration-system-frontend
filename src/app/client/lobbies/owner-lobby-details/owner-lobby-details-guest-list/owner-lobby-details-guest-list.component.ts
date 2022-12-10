import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AdminGetModeratorComponent} from "../../../../admin/admin-get-moderator/admin-get-moderator.component";
import {
  InviteFriendToLobbyDialogComponent
} from "./invite-friend-to-lobby-dialog/invite-friend-to-lobby-dialog.component";

@Component({
  selector: 'app-owner-lobby-details-guest-list',
  templateUrl: './owner-lobby-details-guest-list.component.html',
  styleUrls: ['./owner-lobby-details-guest-list.component.scss']
})
export class OwnerLobbyDetailsGuestListComponent implements OnInit {
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
  openAddFriendToLobbyDialog(){
    this.dialogRef.open(InviteFriendToLobbyDialogComponent, this.getDialogConfig(this.id))
  }
  getDialogConfig(lobbyId: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "580px";
    dialogConfig.data = lobbyId.toString();
    return dialogConfig;
  }
}
