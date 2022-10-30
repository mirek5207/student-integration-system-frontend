import { Component, OnInit } from '@angular/core';
import {PlaceOwnerInfo} from "../shared/interfaces/placeOwner.interface";
import {PlaceownerService} from "../shared/services/placeowner/placeowner.service";

@Component({
  selector: 'app-placeowner',
  templateUrl: './placeowner.component.html',
  styleUrls: ['./placeowner.component.scss']
})
export class PlaceownerComponent implements OnInit {

  registerNewPlaceOwner: PlaceOwnerInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private placeOwnerService : PlaceownerService) { }

  ngOnInit(): void {
  }

  async register(placeOnwer: PlaceOwnerInfo){
    await this.placeOwnerService.registerPlaceOwner(placeOnwer)
    console.log(placeOnwer)
  }

}
