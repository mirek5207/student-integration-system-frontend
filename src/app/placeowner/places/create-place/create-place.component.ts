import { Component, OnInit } from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";
import {TokenService} from "../../../shared/services/token/token.service";
import {PlaceownerService} from "../../../shared/services/placeowner/placeowner.service";

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.scss']
})
export class CreatePlaceComponent implements OnInit {

  registerNewPlace: Place = {
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    maxSeatsAvailableForReservation: 0,
    userId: this.tokenService.getId()
  }

  constructor(private tokenService: TokenService, private placeOwnerService: PlaceownerService) { }

  ngOnInit(): void {
  }

  createPlace(place: Place){
    this.placeOwnerService.createPlace(place);
  }
}
