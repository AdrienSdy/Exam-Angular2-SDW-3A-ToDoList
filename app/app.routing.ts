// Création des routes
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import des composants utilisés dans les routes
import { ToDoComponent } from './components/to.do.component';
import { ToDoArchiveComponent } from './components/to.do.archive.component';

const appRoutes: Routes=[
    // Définition d'une route
    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: ToDoComponent
    },
    {
        path: 'archive',
        component: ToDoArchiveComponent
    },
]

// Export de la class du module de routing
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);