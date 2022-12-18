import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationService} from "../../../shared/services/reservation/reservation.service";
import {Place, Reservation} from "../../../shared/interfaces/placeOwner.interface";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations!: any[]
  private routeSub!: Subscription;
  placeId: any;
  constructor(private reservationService: ReservationService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.placeId = params['placeId']
    });
  }

  accept(id: number){
    this.reservationService.confirmReservation(id).subscribe(r => console.log(r))
  }

  decline(id:number){
    this.reservationService.declineReservation(id).subscribe(r => console.log(r))
  }
  navigateTo(path: string)
  {
    this.router.navigate([path],{queryParams: {placeId: this.placeId}})
  }
}
