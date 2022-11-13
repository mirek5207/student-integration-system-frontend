import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../shared/interfaces/placeOwner.interface";
import {Observable, tap} from "rxjs";
import {ModeratorService} from "../../shared/services/moderator/moderator.service";

@Component({
  selector: 'app-moderator-users',
  templateUrl: './moderator-users.component.html',
  styleUrls: ['./moderator-users.component.scss']
})
export class ModeratorUsersComponent implements OnInit {

  clients$!: Observable<any>;
  placeowners$!: Observable<any>;
  selectedUser: any

  constructor(private moderatorService : ModeratorService) { }

  ngOnInit(): void {
    this.getClients()
    this.getPlaceowners()
  }

  getClients(){
    this.clients$ = this.moderatorService.getAllClients()
  }

  getPlaceowners(){
    this.placeowners$ =  this.moderatorService.getAllPlaceowners()
  }

  selectUser(user: any){
    console.log(user)
    this.selectedUser = user
  }

  updateUser(updateUser: {updateUserIsActive: boolean, id: number}){
      this.moderatorService.updateAccountStatus(updateUser.updateUserIsActive, updateUser.id).pipe(
        tap( () => {this.getClients(); this.getPlaceowners()})
      ).subscribe();
      console.log("siema")
  }

}
