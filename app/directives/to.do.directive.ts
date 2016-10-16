// Import des composants nécessaire à la création de la directive
import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    // Utilisation de la fonction de la class Output
    // afin d'envoyer dans la directive les données vers un composant.
    // La création d’un instance de EventEmitter() permet de créer un événement personnalisé.
    @Output() sendDoneTask = new EventEmitter();

    doneTask(event: Event): void {
        // La fonction .emit(…) permet de capter un événement personnalisé.
         this.sendDoneTask.emit(this.task);
    }

}