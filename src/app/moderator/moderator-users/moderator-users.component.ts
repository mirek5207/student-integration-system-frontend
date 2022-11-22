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

  constructor() { }

  ngOnInit(): void {

  }
}
