import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: 'proyectos', loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent) },
  { path: 'sobre-mi', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },
  { path: '**', redirectTo: '' },
];
