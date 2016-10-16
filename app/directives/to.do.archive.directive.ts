import { Component, Input } from '@angular/core';
import { Task } from "../models/task.model";

@Component({
    selector: 'to-do-archive',
    templateUrl: 'app/partials/directives/to.do.archive.directive.html'
})
export class ToDoArchiveDirective { 
    
    // Récupération d'une tâche dans la directive provenant du composant
    @Input() task: Task;
}