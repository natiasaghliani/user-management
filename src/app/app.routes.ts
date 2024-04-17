import { Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
    {path: '', component: UserAddComponent},
    {path: 'users-list', component: UsersListComponent}
];
