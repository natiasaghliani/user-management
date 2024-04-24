import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.usersLoaded, (state, { users }) => ({
    ...state,
    users,
  }))
);
