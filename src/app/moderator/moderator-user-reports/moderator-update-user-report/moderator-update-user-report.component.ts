import {Component, Inject, OnInit} from '@angular/core';
import {PatchSystemReport, PatchUserAccount} from "../../../shared/interfaces/admin.interface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";

@Component({
  selector: 'app-moderator-update-user-report',
  templateUrl: './moderator-update-user-report.component.html',
  styleUrls: ['./moderator-update-user-report.component.scss']
})
export class ModeratorUpdateUserReportComponent implements OnInit {

  inActiveAccount: PatchUserAccount = {
    isActive: false
  }
  verifiedReport: PatchSystemReport = {
    _reportStatus: "Verified"
  }
  description!: string
  reportId!: number
  reportedUserId!: number
  creationDate!: Date

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private moderatorService: ModeratorService) { }

  ngOnInit(): void {
    this.reportedUserId = this.data[3]
    this.creationDate = this.data[2]
    this.description = this.data[1]
    this.reportId = this.data[0]
  }
  blockUserAccount() {
    console.log(this.reportedUserId)
    this.moderatorService.updateStatusOfUserAccount(this.reportedUserId, this.inActiveAccount).subscribe(r=>console.log(r))
    this.changeStatusOfReportToVerified()
  }

  changeStatusOfReportToVerified() {
    this.moderatorService.updateStatusOfUserReport(this.reportId, this.verifiedReport).subscribe(r=>console.log(r))
    window.location.reload()
  }
}
