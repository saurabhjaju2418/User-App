import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';

export const appRoutes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'details/:id', component:  DetailsComponent },
]