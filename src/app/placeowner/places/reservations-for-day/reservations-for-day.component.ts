import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../../shared/services/reservation/reservation.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-reservations-for-day',
  templateUrl: './reservations-for-day.component.html',
  styleUrls: ['./reservations-for-day.component.scss']
})
export class ReservationsForDayComponent implements OnInit {

  @Input() set localReservations(value: any) {
    this.reservations = Object.assign([], value)
  }
  @Input() set setLocal(value: any){
    this.local = Object.assign({}, value)
  }

  date= Date.now()
  reservations!: any[]
  local!: any
  pipe = new DatePipe('en-US')
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  getForSpecificDate(date: any, id: any){
    this.reservationService.getConfirmedReservationsForOneDay(date, id).subscribe(r => console.log(r))
  }

}
