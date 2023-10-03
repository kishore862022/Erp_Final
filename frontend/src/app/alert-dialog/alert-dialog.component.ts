import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],


})
export class AlertDialogComponent {
  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
