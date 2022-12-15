import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../shared/services/friend/friend.service";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {TokenService} from "../../../shared/services/token/token.service";

@Component({
  selector: 'app-my-friends-list',
  templateUrl: './my-friends-list.component.html',
  styleUrls: ['./my-friends-list.component.scss']
})
export class MyFriendsListComponent implements OnInit {

  friends!: any[]
  constructor(private friendService: FriendService,
              private moderatorService: ModeratorService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllFriendship()
  }

  getAllFriendship(){
    this.friendService.getAllFriendships(this.tokenService.getId()).subscribe(r => this.friends = r)
  }

  deleteUserFromFriendList(id: number){
    this.friendService.deleteFriend(id).subscribe(r => console.log(r))
  }

}
