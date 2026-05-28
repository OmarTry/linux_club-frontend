import { Routes } from "@angular/router";

export const ABOUT_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/about-page/about-page')
    },
    {
        path: 'join',
        loadComponent: () => import('./pages/join-page/join-page')
    },
    {
        path: 'people-&-community',
        loadComponent: () => import('./pages/people-page/people-page')
    }
]