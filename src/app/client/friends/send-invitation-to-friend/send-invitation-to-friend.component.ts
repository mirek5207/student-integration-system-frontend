import { Component, OnInit } from '@angular/core';
import {GetClient} from "../../../shared/interfaces/client.interface";
import {FriendService} from "../../../shared/services/friend/friend.service";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {TokenService} from "../../../shared/services/token/token.service";

@Component({
  selector: 'app-send-invitation-to-friend',
  templateUrl: './send-invitation-to-friend.component.html',
  styleUrls: ['./send-invitation-to-friend.component.scss']
})
export class SendInvitationToFriendComponent implements OnInit {

  clients!: GetClient[]
  constructor(private friendService: FriendService,
              private moderatorService: ModeratorService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  getAllClients(){
    this.moderatorService.getAllClients().subscribe(r => this.clients = r)
  }

  addUserToFriendship(id: number){
    this.friendService.sendInvite(this.tokenService.getId(), id).subscribe(r => console.log(r))
    // window.location.reload()
  }
}
