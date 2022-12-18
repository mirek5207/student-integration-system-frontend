import {Component, Inject, OnInit} from '@angular/core';
import {FriendService} from "../../../../../shared/services/friend/friend.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TokenService} from "../../../../../shared/services/token/token.service";
import {LobbyService} from "../../../../../shared/services/lobby/lobby.service";

@Component({
  selector: 'app-invite-friend-to-lobby-dialog',
  templateUrl: './invite-friend-to-lobby-dialog.component.html',
  styleUrls: ['./invite-friend-to-lobby-dialog.component.scss']
})
export class InviteFriendToLobbyDialogComponent implements OnInit {
  lobbyId!: number;
  userId!: number;
  friends!: any[];
  constructor(private friendService: FriendService, private lobbyService: LobbyService, @Inject(MAT_DIALOG_DATA) public data:any, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.lobbyId = this.data
    this.getAllNotInvitedFriends()
  }
  getAllNotInvitedFriends(){
    this.friendService.getAllFriendsToLobby(this.tokenService.getId(), this.lobbyId).subscribe(r => this.friends = r);
  }
  inviteGuestToLobby(userId: number){
    this.lobbyService.addGuestToLobby(userId,this.lobbyId)
    window.location.reload()
  }
}
