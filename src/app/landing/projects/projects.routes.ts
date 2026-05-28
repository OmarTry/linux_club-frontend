import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/projects_showcase-page/projects_showcase-page')
    },
    {
        path: 'submit-project',
        loadComponent: () => import('./pages/projects_submit_page/projects_submit_page')
    }
];