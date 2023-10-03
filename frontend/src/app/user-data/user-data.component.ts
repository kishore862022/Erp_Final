import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  userData: string[] = [];

  saveUserData() {
    // Save data to local storage when the "Save Data" button is clicked
    const user1Data = ["AD124", "DS456", "TG3468", "PI9073"];
    localStorage.setItem('user1', JSON.stringify(user1Data));
  }

  loadUserData() {
    // Load data from local storage when the "Load Data" button is clicked
    const data = localStorage.getItem('user1');
    this.userData = data ? JSON.parse(data) : [];
    
  }
}
