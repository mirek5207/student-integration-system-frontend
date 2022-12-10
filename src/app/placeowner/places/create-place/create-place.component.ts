import { Component, OnInit } from '@angular/core';
import {CreatePlace, Place} from "../../../shared/interfaces/placeOwner.interface";
import {TokenService} from "../../../shared/services/token/token.service";
import {PlaceownerService} from "../../../shared/services/placeowner/placeowner.service";

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.scss']
})
export class CreatePlaceComponent implements OnInit {

  registerNewPlace: CreatePlace = {
    name: '',
    latitude: 0,
    longitude: 0,
    userId: this.tokenService.getId()
  }

  constructor(private tokenService: TokenService, private placeOwnerService: PlaceownerService) { }

  ngOnInit(): void {
    console.log(this.tokenService.getId())
  }

  createPlace(place: CreatePlace){
    this.placeOwnerService.createPlace(place);
  }
}
