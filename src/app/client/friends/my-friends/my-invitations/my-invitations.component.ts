import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../../shared/services/friend/friend.service";
import {ModeratorService} from "../../../../shared/services/moderator/moderator.service";
import {TokenService} from "../../../../shared/services/token/token.service";

@Component({
  selector: 'app-my-invitations',
  templateUrl: './my-invitations.component.html',
  styleUrls: ['./my-invitations.component.scss']
})
export class MyInvitationsComponent implements OnInit {

  myInvitations!: any[]
  constructor(private friendService: FriendService,
              private moderatorService: ModeratorService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllInvitations()
  }

  getAllInvitations(){
    this.friendService.getAllInvitedClient(this.tokenService.getId()).subscribe(r => this.myInvitations = r)
  }

}
