import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable, tap} from "rxjs";
import {PlaceownerService} from "../../../shared/services/placeowner/placeowner.service";
import {TokenService} from "../../../shared/services/token/token.service";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  places$!: Observable<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private placeOwnerService: PlaceownerService, private tokenService: TokenService) { }

  currentPlace!: Place

  ngOnInit(): void {
    this.currentPlace = this.data
  }

  updatePlace(place: Place){
    this.placeOwnerService.updatePlace(place, place.id).pipe(
      tap( () => this.getPlaces())
    ).subscribe();
  }
  getPlaces(){
    this.places$ =  this.placeOwnerService.getAllPlaces(this.tokenService.getId())
  }
  deletePlace(id: number){
    this.placeOwnerService.deletePlace(id).pipe(
      tap( ()=> this.getPlaces())
    ).subscribe()
  }
}
