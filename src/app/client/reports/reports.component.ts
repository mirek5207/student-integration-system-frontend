import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(path: string)
  {
    this.router.navigate([path])
  }
}
