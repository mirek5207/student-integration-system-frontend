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
  private routeSub!: Subscription;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });
    console.log(this.id)
  }
  navigateTo(path: string)
  {
    this.router.navigate([path])
  }
}
