import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-moderator-users-list',
  templateUrl: './moderator-users-list.component.html',
  styleUrls: ['./moderator-users-list.component.scss']
})
export class ModeratorUsersListComponent implements OnInit {

  @Input() clients: any[] = []
  @Input() placeOwners: any[] = []
  @Output() userSelected = new EventEmitter<any>();
  @Output() placeownerSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: any){
    this.userSelected.emit(user)
  }

}
