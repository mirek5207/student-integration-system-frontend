import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  @Input() set selectedPlace(value: Place) {
    this.currentPlace = Object.assign({}, value)
  }

  @Output() placeUpdated = new EventEmitter<Place>();
  @Output() placeDeleted = new EventEmitter<number>();

  constructor() { }

  currentPlace!: Place

  ngOnInit(): void {
  }

  updatePlace(place: Place){
    this.placeUpdated.emit(place)
  }

  deletePlace(id: number){
    this.placeDeleted.emit(id)
  }

}
