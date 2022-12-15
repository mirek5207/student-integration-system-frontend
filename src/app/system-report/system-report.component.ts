import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {TokenService} from "../shared/services/token/token.service";
import {ClientService} from "../shared/services/client/client.service";

@Component({
  selector: 'app-system-report',
  templateUrl: './system-report.component.html',
  styleUrls: ['./system-report.component.scss']
})
export class SystemReportComponent implements OnInit {
  createSystemReport: any = {
    description: "",
    reportingUserId: 0
  }

  constructor(private tokenService: TokenService,private clientService: ClientService) { }

  ngOnInit(): void {
  }

  postSystemReport() {
    this.createSystemReport.reportingUserId = this.tokenService.getId()
    this.clientService.createSystemReport(this.createSystemReport)
    alert("Zgłoszenie zostało wysłane")
    this.createSystemReport.description = ""
  }
}
