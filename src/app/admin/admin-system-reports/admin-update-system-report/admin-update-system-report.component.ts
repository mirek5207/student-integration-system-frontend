import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PatchSystemReport} from "../../../shared/interfaces/admin.interface";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {AdminService} from "../../../shared/services/admin/admin.service";

@Component({
  selector: 'app-admin-update-system-report',
  templateUrl: './admin-update-system-report.component.html',
  styleUrls: ['./admin-update-system-report.component.scss']
})
export class AdminUpdateSystemReportComponent implements OnInit {
  verifiedReport: PatchSystemReport = {
    _reportStatus: "Verified"
  }
  inProgressReport: PatchSystemReport = {
    _reportStatus: "InProgress"
  }
  description!: string
  reportId!: number
  creationDate!: Date
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private adminService: AdminService) { }

  ngOnInit(): void {
    this.creationDate = this.data[2]
    this.description = this.data[1]
    this.reportId = this.data[0]
  }
  updateSystemReportStatus(reportStatus: PatchSystemReport) {
    this.adminService.updateStatusOfSystemReport(this.reportId, reportStatus).subscribe(r=>console.log(r))
    window.location.reload()
  }
}
