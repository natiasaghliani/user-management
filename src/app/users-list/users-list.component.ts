import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../states/user/user.reducer';
import { selectUsers } from '../states/user/user.selector';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users$ = this.store.select(selectUsers);

  constructor(private router: Router, private store: Store<UserState>) {}

  ngOnInit() {
    this.users$ = this.store.select(selectUsers);
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
