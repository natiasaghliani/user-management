import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/'])
  }

}
