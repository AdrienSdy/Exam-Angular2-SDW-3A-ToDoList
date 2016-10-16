// Import des composants nécessaire à la création de la directive
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Import du model de donnée
import { Task } from "../models/task.model";

//Configuration de la directive
@Component({
    selector: 'to-do-archive',
    templateUrl: 'app/partials/directives/to.do.archive.directive.html'
})
export class ToDoArchiveDirective { 
    
    // Récupération d'une tâche dans la directive provenant du composant
    @Input() task: Task;

    // Envoie vers le composant d'un évenement personnalisé. 
    @Output() sendDelete = new EventEmitter();

    // Fonction permettant d'appeler, lors d'un évènement défini (au click, ici), 
    // la fonction de suppression dans le composant
    delete(event: Event): void {
         this.sendDelete.emit(this.task);     
    }
}