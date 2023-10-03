import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  data: string = '';
  list: any;

  constructor(public dialog: MatDialog) {
    localStorage.setItem(
      'user3',
      JSON.stringify(['A123', 'da324', 'rd12334', 'yf123', 'ew123'])
    );
    localStorage.removeItem('user3'); // Corrected the typo here
  }

  load(user: any) {
    console.log(localStorage.getItem(user));
    const data = localStorage.getItem(user);
    this.list = data ? JSON.parse(data) : [];
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.data = data;
    this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { message: data }, // Pass data to the dialog
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
