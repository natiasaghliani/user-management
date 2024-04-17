import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserAddComponent } from "./user-add/user-add.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersListComponent } from "./users-list/users-list.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UserAddComponent, HttpClientModule, UsersListComponent]
})
export class AppComponent {
  title = 'user-management';

  
}
