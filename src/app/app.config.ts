import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// src/app/app.config.ts
export const AppConfig = {
  apiBase: 'http://localhost:8080/api' // <-- change to your AWS URL when deployed
};

