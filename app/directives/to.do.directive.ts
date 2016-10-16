// Import des composants nécessaire à la création de la directive
import { Component, Input } from '@angular/core';
import { Task } from "../models/task.model";

// Configuration de la directive
@Component({
    selector: 'to-do',
    templateUrl: 'app/partials/directives/to.do.directive.html'
})

// Export de la directive
export class ToDoDirective { 
    
    // Utilisation de la fonction de la class Input 
    // afin de recevoir dans la directive les données provenant d’un composant.
    // Ici une tâche.
    @Input() task: Task;

}