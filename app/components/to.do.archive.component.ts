// Import des composants nécessaire à la création du composant
import { Component, OnInit } from '@angular/core';
// Import du model de donnée
import { Task } from "../models/task.model";
// Import du service
import { ToDoService } from "../services/to.do.service";

// Configuration du composant
@Component({
    selector: 'to-do-archive-page',
    templateUrl: 'app/partials/components/to.do.archive.component.html',
    providers: [ToDoService],
})

// Export du composant
export class ToDoArchiveComponent {
    tasks: Task[];
    
    constructor(
        private toDoService: ToDoService,
    ){};
    
    // Fonction appelé au chargement du composant qui récupère toutes les tâches.
    ngOnInit(): void {
        this.toDoService.getTasks().then(tasks => this.tasks = tasks);
    }
 }