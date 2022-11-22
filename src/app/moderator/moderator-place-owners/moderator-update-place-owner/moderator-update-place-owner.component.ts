import {Component, Inject, OnInit} from '@angular/core';
import {GetClient, UpdateClient} from "../../../shared/interfaces/client.interface";
import {first, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../shared/services/client/client.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GetOwner, UpdateOwner} from "../../../shared/interfaces/placeOwner.interface";
import {PlaceownerService} from "../../../shared/services/placeowner/placeowner.service";

@Component({
  selector: 'app-moderator-update-place-owner',
  templateUrl: './moderator-update-place-owner.component.html',
  styleUrls: ['./moderator-update-place-owner.component.scss']
})
export class ModeratorUpdatePlaceOwnerComponent implements OnInit {

  owner!: GetOwner
  updateOwner: UpdateOwner= {} as UpdateOwner
  owner$!: Observable<GetOwner>
  public form: FormGroup = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    surName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private ownerService: PlaceownerService, @Inject(MAT_DIALOG_DATA) public data:any) {}

  id!: number;
  ngOnInit(): void {
    this.id = this.data;
    this.loadClient()
    this.owner$.pipe(first()).subscribe(mod => this.owner = mod)
    this.setUpdateOwner();
  }

  loadClient(){
    this.owner$ = this.ownerService.getOwnerById(this.id)

  }
  update(client: UpdateClient){
    this.ownerService.updateOwner(this.id, client).subscribe()
  }

  setUpdateOwner(){
    const client = this.owner$.pipe(first())
    client.subscribe(val => {
      this.updateOwner.firstName = val.firstName;
      this.updateOwner.surName = val.surName;
      this.updateOwner.email = val.user.email;
      this.updateOwner.login = val.user.login;
      this.updateOwner.isAccountActive = val.user.account.isActive;
    });
  }
}
