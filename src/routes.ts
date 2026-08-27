import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent) },
  { path: 'details/:id', loadComponent: () => import('./app/details/details.component').then(m => m.DetailsComponent) },
  { path: '**', redirectTo: '' }
];
