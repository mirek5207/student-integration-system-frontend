import {Component, Inject, OnInit} from '@angular/core';
import {first, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GetClient, UpdateClient} from "../../../shared/interfaces/client.interface";
import {ClientService} from "../../../shared/services/client/client.service";



@Component({
  selector: 'app-moderator-update-user',
  templateUrl: './moderator-update-user.component.html',
  styleUrls: ['./moderator-update-user.component.scss']
})
export class ModeratorUpdateUserComponent implements OnInit {

  client!: GetClient
  updateClient: UpdateClient= {} as UpdateClient
  client$!: Observable<GetClient>
  public form: FormGroup = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    surName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private clientService: ClientService, @Inject(MAT_DIALOG_DATA) public data:any) {}

  id!: number;
  ngOnInit(): void {
    this.id = this.data;
    this.loadClient()
    this.client$.pipe(first()).subscribe(mod => this.client = mod)
    this.setUpdateClient();
  }

  loadClient(){
    this.client$ = this.clientService.getClientById(this.id)

  }
  update(client: UpdateClient){
    this.clientService.updateClient(this.id, client).subscribe()
  }

  setUpdateClient(){
    const client = this.client$.pipe(first())
    client.subscribe(val => {
      this.updateClient.firstName = val.firstName;
      this.updateClient.surName = val.surName;
      this.updateClient.email = val.user.email;
      this.updateClient.login = val.user.login;
      this.updateClient.isAccountActive = val.user.account.isActive;
    });
  }

}
