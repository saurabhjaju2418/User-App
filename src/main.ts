import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './routes';

bootstrapApplication(AppComponent, { providers: [provideHttpClient(), provideRouter(appRoutes)] }).catch(console.error);
