import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-owner-lobby-details-nav',
  templateUrl: './owner-lobby-details-nav.component.html',
  styleUrls: ['./owner-lobby-details-nav.component.scss']
})
export class OwnerLobbyDetailsNavComponent implements OnInit {
  id!: number;
  type!: string;
  private routeSub!: Subscription;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.type = params['type']
    });
  }
  navigateTo(path: string)
  {
    this.router.navigate([path], {queryParams: {id: this.id, type: this.type}})
  }

}
