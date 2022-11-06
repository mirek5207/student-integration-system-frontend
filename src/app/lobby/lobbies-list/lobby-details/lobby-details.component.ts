import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-lobby-details',
  templateUrl: './lobby-details.component.html',
  styleUrls: ['./lobby-details.component.scss']
})
export class LobbyDetailsComponent{

  animal=''
  name=''

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LobbyDetailsDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}


@Component({
  selector: 'app-lobby-details-dialog',
  templateUrl: './lobby-details-dialog.component.html',
})
export class LobbyDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LobbyDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

