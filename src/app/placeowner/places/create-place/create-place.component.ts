import { Component, OnInit } from '@angular/core';
import {CreatePlace} from "../../../shared/interfaces/placeOwner.interface";
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
    latitude: null,
    longitude: null,
    userId: this.tokenService.getId()
  }

  constructor(private tokenService: TokenService, private placeOwnerService: PlaceownerService) { }

  ngOnInit(): void {
    console.log(this.tokenService.getId())
  }

  createPlace(place: CreatePlace){
    console.log(place)
    this.placeOwnerService.createPlace(place);
  }
}
