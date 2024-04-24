import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { addUser } from '../states/user/user.action';
import { UserState } from '../states/user/user.reducer';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent {
  showAlert: boolean = false;
  userId!: number;
  createdUserAt: string = '';
  userForm!: FormGroup;
  loading!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<UserState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  onSubmit() {
    this.onCloseAlert();

    if (this.userForm.valid) {
      this.createUser(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  createUser(userData: User) {
    const url = 'https://reqres.in/api/users';
    this.showAlert = false;
    this.loading = true;
    this.http.post(url, userData).subscribe({
      next: (response: any): void => {
        console.log('User added successfully:', response);
        this.store.dispatch(addUser({ user: response }));
        this.loading = false;
        this.clearInputs();
        this.showAlert = true;
        setTimeout(() => this.onCloseAlert(), 3000);
      },
      error: (error) => {
        console.error('Error adding user:', error);
        this.loading = false;
      },
    });
  }

  clearInputs() {
    this.userForm.reset();
  }

  onCloseAlert() {
    this.showAlert = false;
  }

  goToUsersList() {
    this.router.navigate(['/users-list']);
  }
}
