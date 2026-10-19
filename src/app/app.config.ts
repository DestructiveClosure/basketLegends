import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BALL_CONFIG } from './Shared/ball-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: BALL_CONFIG,
      useValue: {
        apiBaseUrl: "https://api.openpathdb.com", defaultCity: "Windsor"
      }
    }
  ],
  
};
