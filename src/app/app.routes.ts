import { Routes } from '@angular/router';
import MainLayout from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
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
            {
                path: 'about',
                loadChildren: () => import('./landing/about/about.routes').then(m => m.ABOUT_ROUTES)
            },
        ]
    },
    // También podrías cargar un componente de Error 404 estilo terminal aquí
    {
        path: '**',
        loadComponent: () => import('./shared/pages/not_found-page/not_found-page')
    }
];