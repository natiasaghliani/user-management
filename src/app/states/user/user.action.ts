import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const loadUsers = createAction('[User] Load Users');
export const usersLoaded = createAction('[User] Users Loaded', props<{ users: User[] }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: any }>());