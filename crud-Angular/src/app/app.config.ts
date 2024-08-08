import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    // Note: No need to import HttpClientModule separately when using provideHttpClient
  ],
};
