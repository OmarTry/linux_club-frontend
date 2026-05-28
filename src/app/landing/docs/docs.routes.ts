import { Routes } from '@angular/router';

export const DOCS_ROUTES: Routes = [
    {
        path: '',
        // Este componente tendría el buscador "grep search..." y la lista de categorías (Arch, Debian, etc.)
        loadComponent: () => import('./pages/doc_list-page/doc_list-page')
    },
    {
        path: 'arch-linux',
        // Este componente lee el parámetro ':slug' de la URL para traer el post específico desde tu FastAPI
        loadComponent: () => import('./pages/arch_docs-page/arch_docs-page')
    },
    {
        path: 'debian',
        // Este componente lee el parámetro ':slug' de la URL para traer el post específico desde tu FastAPI
        loadComponent: () => import('./pages/debian_docs-page/debian_docs-page')
    },
    {
        path: 'fedora',
        // Este componente lee el parámetro ':slug' de la URL para traer el post específico desde tu FastAPI
        loadComponent: () => import('./pages/fedora_docs-page/fedora_docs-page')
    },
    {
        path: 'ubuntu',
        // Este componente lee el parámetro ':slug' de la URL para traer el post específico desde tu FastAPI
        loadComponent: () => import('./pages/ubuntu_docs-page/ubuntu_docs-page')
    }
];