import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule} from '@angular/router';
@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  userName: string = '';
  userProfession: string = '';
  showAlert: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const userData = {
      name: this.userName,
      job: this.userProfession
    };
    
    this.createUser(userData);
  }
  
  createUser(userData: any) {
    const url = 'https://reqres.in/api/users';
    this.showAlert = false;
    this.http.post(url, userData).subscribe(
      response => {
        console.log('User added successfully:', response);
        this.clearInputs();
        this.showAlert = true;
      },
      error => {
        console.error('Error adding user:', error);
      }
    );
  }

  clearInputs() {
    this.userName = '';
    this.userProfession = '';
  }

  onCloseAlert() {
    // Reset the showAlert flag to hide the alert when it's closed
    this.showAlert = false;
  }

  goToUsersList() {
    this.router.navigate(['/users-list']);
  }
}
