import { Component, OnInit } from '@angular/core';
import {TokenService} from "../shared/services/token/token.service";
import {ClientService} from "../shared/services/client/client.service";

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {
  createUserReport: any = {
    description: '',
    reportingUserId: 0,
    reportedUserLogin : ''
  };

  constructor(private tokenService: TokenService,private clientService: ClientService) { }

  ngOnInit(): void {
  }

  postUserReport() {
    this.createUserReport.reportingUserId = this.tokenService.getId()
    this.clientService.createUserReport(this.createUserReport)
    alert("Zgłoszenie zostało wysłane")
    this.createUserReport.reportedUserLogin = ""
    this.createUserReport.description = ""
  }
}
