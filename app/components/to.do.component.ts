// Import des composants nécessaire à la création du composant
import { Component, OnInit } from '@angular/core';
// Import du model de donnée
import { Task } from "../models/task.model";
// Import du service
import { ToDoService } from "../services/to.do.service";

// Configuration du composant
@Component({
    selector: 'to-do-page',
    templateUrl: 'app/partials/components/to.do.component.html',
    providers: [ToDoService],
})

// Export du composant
export class ToDoComponent {
    tasks: Task[];
    newTask: Task;
    
    // Ajout du service dans le composant
    constructor( 
        private toDoService: ToDoService
    ){};
    
    // Création d'une fonction appelée au chargement du composant
    // Elle appelle la fonction du service permettant de récupérer les données
    // des tâches.
    // Et elle initialise le formulaire d'ajout d'une tâche. 
    ngOnInit(): void {
        this.toDoService.getTasks().then(tasks => this.tasks = tasks);
    }
 }