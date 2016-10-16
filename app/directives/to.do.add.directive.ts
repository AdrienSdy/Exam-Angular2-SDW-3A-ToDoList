// Import des composants nécessaire à la création de la directive
import { Component,Input, Output, EventEmitter } from '@angular/core';
// Import du model de donnée
import { Task } from "../models/task.model";

// Configuration de la directive
@Component({
    selector: 'to-do-add',
    templateUrl: 'app/partials/directives/to.do.add.directive.html'
})
export class ToDoAddDirective { 

    // Récupération d'une tâche dans la directive provenant du composant
    @Input() newTask: Task;

    // Envoie vers le composant d'un évenement personnalisé. 
    @Output() sendAddTask = new EventEmitter();

    // Fonction permettant d'appeler, lors d'un évènement défini (au click, ici), 
    // la fonction d'ajout d'une tâche dans le composant
    addTask(event: Event): void {
         this.sendAddTask.emit(this.newTask);
    }
}