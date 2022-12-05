import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../../shared/services/friend/friend.service";
import {ModeratorService} from "../../../../shared/services/moderator/moderator.service";
import {TokenService} from "../../../../shared/services/token/token.service";

@Component({
  selector: 'app-requests-to-friend-list',
  templateUrl: './requests-to-friend-list.component.html',
  styleUrls: ['./requests-to-friend-list.component.scss']
})
export class RequestsToFriendListComponent implements OnInit {

  invitations!: any[]
  constructor(private friendService: FriendService,
              private moderatorService: ModeratorService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllInvitations()
  }

  getAllInvitations(){
    this.friendService.getAllInvites(this.tokenService.getId()).subscribe(r => this.invitations = r)
  }

  acceptInvitation(id: number){
    this.friendService.acceptInvite(id).subscribe(r => console.log(r))
  }

  rejectInvitation(id: number){
    this.friendService.rejectInvite(id).subscribe(r => console.log(r))
  }

}
