import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing/home/home-page/home-page')
    },
    // 2. Módulo de Documentación (Wiki / Comandos)
    {
        path: 'docs',
        loadChildren: () => import('./landing/docs/docs.routes').then(m => m.DOCS_ROUTES)
    },

    // 3. Módulo de Proyectos de la Comunidad
    {
        path: 'projects',
        loadChildren: () => import('./landing/projects/projects.routes').then(m => m.PROJECTS_ROUTES)
    },
    // También podrías cargar un componente de Error 404 estilo terminal aquí
    {
        path: '**',
        redirectTo: ''
    }
];