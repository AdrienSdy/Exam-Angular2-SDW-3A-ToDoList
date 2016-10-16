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
        this.resetInput();
    }

    // Fonction permettant de spécifier qu'une tâche à été éffectué
    doneTask(task: Task): void {
        this.toDoService.setArchive(task);
    }

    // Fonction permettant d'ajouter une tâche
    // Et réinitialise le formulaire d'ajout
    addTask(task: Task) {
        this.toDoService.addTask(task);
        this.resetInput();
    }

    // Fonction permettant d'initialiser le formulaire d'ajout
    resetInput(): void {
        this.newTask = {id: this.toDoService.lengthTasks(), title: '', description: '', archive: false};
    }
 }