import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../shared/services/friend/friend.service";
import {ModeratorService} from "../../shared/services/moderator/moderator.service";
import {GetClient} from "../../shared/interfaces/client.interface";
import {Observable} from "rxjs";
import {TokenService} from "../../shared/services/token/token.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

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
  }

}
