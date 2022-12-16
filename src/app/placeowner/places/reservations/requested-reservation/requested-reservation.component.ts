import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ReservationService} from "../../../../shared/services/reservation/reservation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-requested-reservation',
  templateUrl: './requested-reservation.component.html',
  styleUrls: ['./requested-reservation.component.scss']
})
export class RequestedReservationComponent implements OnInit {

  reservations!: any[]
  private routeSub!: Subscription;
  placeId: any;
  constructor(private reservationService: ReservationService,private route: ActivatedRoute, private router: Router) { }

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
