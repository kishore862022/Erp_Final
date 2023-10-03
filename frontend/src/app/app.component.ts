import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userCourses: string[] = [];
  title = 'appcomponent'
  

  

constructor(public dialog: MatDialog){
  localStorage.setItem('user1', JSON.stringify(["AD124","DS456","TG3468","PI9073"]));
  localStorage.setItem('user2', JSON.stringify(["AC124","SF456"]))
}

  showUser1Courses() {
    // Simulate fetching User 1's courses
    this.userCourses = ['Course 1 for User 1', 'Course 2 for User 1'];
  }

  showUser2Courses() {
    // Simulate fetching User 2's courses
    this.userCourses = ['Course 1 for User 2', 'Course 2 for User 2'];
  }

}
// export class YourComponent {
//   showAlert = false;
//   alertMessage = '';

//   load(userId: string) {
//     // Simulate loading data for the user
//     this.alertMessage = `Data loaded for User ${userId}`;
//     this.showAlert = true;
//   }
// }

  

