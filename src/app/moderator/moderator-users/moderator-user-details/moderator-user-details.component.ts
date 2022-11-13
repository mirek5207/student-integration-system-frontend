import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-moderator-user-details',
  templateUrl: './moderator-user-details.component.html',
  styleUrls: ['./moderator-user-details.component.scss']
})
export class ModeratorUserDetailsComponent implements OnInit {

  @Input() set selectedUser(value: any) {
    this.currentUser = Object.assign({}, value)
  }

  @Output() userUpdated = new EventEmitter<any>();

  constructor() { }

  currentUser = {} as any

  updateUserIsActive!: boolean

  ngOnInit(): void {
  }

  updateUserAccount(value: {updateUserIsActive: boolean, id: number}){
    this.userUpdated.emit(value)
  }

}
