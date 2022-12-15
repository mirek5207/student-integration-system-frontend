import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationService} from "../../../shared/services/reservation/reservation.service";
import {Place, Reservation} from "../../../shared/interfaces/placeOwner.interface";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations!: any[]
  private routeSub!: Subscription;
  private placeId: any;
  constructor(private reservationService: ReservationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.placeId = params['placeId']
    });
    this.getAllReservations()
  }

  accept(id: number){
    this.reservationService.confirmReservation(id).subscribe(r => console.log(r))
  }

  decline(id:number){
    this.reservationService.declineReservation(id).subscribe(r => console.log(r))
  }
  getAllReservations(){
    this.reservationService.getSentReservationsForPlace(this.placeId).subscribe(r => this.reservations = r)
  }
}
