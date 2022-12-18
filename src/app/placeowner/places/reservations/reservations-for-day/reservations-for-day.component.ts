import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ReservationService} from "../../../../shared/services/reservation/reservation.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservations-for-day',
  templateUrl: './reservations-for-day.component.html',
  styleUrls: ['./reservations-for-day.component.scss']
})
export class ReservationsForDayComponent implements OnInit {
  date = new Date()
  reservations!: any[]
  private routeSub!: Subscription;
  local!: any
  pipe = new DatePipe('en-US')
  placeId: any;

  constructor(private reservationService: ReservationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.placeId = params['placeId']
    });
  }

  getForSpecificDate(){
    this.reservations = []
    this.reservationService.getConfirmedReservationsForOneDay(this.date, this.placeId).subscribe(r => this.reservations = r)
  }

}
