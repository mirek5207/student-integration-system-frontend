import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationService} from "../../../shared/services/reservation/reservation.service";
import {Place, Reservation} from "../../../shared/interfaces/placeOwner.interface";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  @Input() set localReservations(value: any) {
    this.reservations = Object.assign([], value)
  }

  reservations!: Reservation[]
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  accept(id: number){
    this.reservationService.confirmReservation(id).subscribe(r => console.log(r))
  }

  decline(id:number){
    this.reservationService.declineReservation(id).subscribe(r => console.log(r))
  }

}
