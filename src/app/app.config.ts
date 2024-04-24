import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { userReducer } from './states/user/user.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {user:userReducer}
  )],
  
};
