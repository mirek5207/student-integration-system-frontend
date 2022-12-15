import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../shared/services/token/token.service";
import {PlaceownerService} from "../../shared/services/placeowner/placeowner.service";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {Place} from "../../shared/interfaces/placeOwner.interface";
import {ReservationService} from "../../shared/services/reservation/reservation.service";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places$!: Observable<any>;
  selectedPlace: any
  reservations!: any[]
  confirmedReservation!: any[]
  constructor(private tokenService: TokenService,
              private placeOwnerService: PlaceownerService,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getPlaces()
  }

  getPlaces(){
    this.places$ =  this.placeOwnerService.getAllPlaces(this.tokenService.getId())
  }

  selectPlace(place: Place){
    this.selectedPlace = place
  }

  getAllReservations(placeId: number){
    this.reservationService.getSentReservationsForPlace(placeId).subscribe(r => this.reservations = r)
  }

  getReservationForDay(placeId: number, date:any){
    console.log(placeId)
    console.log(date)
    this.reservationService.getConfirmedReservationsForOneDay(date, placeId).subscribe(r => console.log(r))
  }
}
