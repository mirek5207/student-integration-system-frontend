import { Component, OnInit } from '@angular/core';
import {ModeratorInfo} from "../../../../shared/interfaces/moderator.interface";
import {CreateReservation} from "../../../../shared/interfaces/client.interface";
import {Subscription, tap} from "rxjs";
import {ReservationService} from "../../../../shared/services/reservation/reservation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-owner-lobby-details-place-reservation',
  templateUrl: './owner-lobby-details-place-reservation.component.html',
  styleUrls: ['./owner-lobby-details-place-reservation.component.scss']
})
export class OwnerLobbyDetailsPlaceReservationComponent implements OnInit {
  lobbyId!: number;
  placeId!: number;
  private routeSub!: Subscription;
  createReservation: CreateReservation = {
    startDate: new Date(),
    endDate: new Date(),
    numberOfGuests: 0,
    phoneNumber: '',
    placeId: 0,
    lobbyId: 0
  }

  constructor(private reservationService : ReservationService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.lobbyId = params['id']
      this.placeId = params['placeId']
    });
  }
  async registerReservation(){
    this.createReservation.lobbyId = parseInt(String(this.lobbyId))
    this.createReservation.placeId = parseInt(String(this.placeId))
    console.log(this.createReservation)
    await this.reservationService.createReservation(this.createReservation)
  }

}
