import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reports-nav',
  templateUrl: './reports-nav.component.html',
  styleUrls: ['./reports-nav.component.scss']
})
export class ReportsNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(path: string)
  {
    this.router.navigate([path])
  }

}
