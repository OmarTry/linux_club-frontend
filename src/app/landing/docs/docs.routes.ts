import { Routes } from '@angular/router';

export const DOCS_ROUTES: Routes = [
    {
        path: '',
        // Este componente tendría el buscador "grep search..." y la lista de categorías (Arch, Debian, etc.)
        loadComponent: () => import('./pages/doc_list-page/doc_list-page')
    },
    {
        path: ':slug',
        // Este componente lee el parámetro ':slug' de la URL para traer el post específico desde tu FastAPI
        loadComponent: () => import('./pages/doc_detail-page/doc_detail-page')
    }
];