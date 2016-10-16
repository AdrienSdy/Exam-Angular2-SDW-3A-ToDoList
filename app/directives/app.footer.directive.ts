// Import des composants nécessaire à la création de la directive
import { Component, OnInit } from '@angular/core';
// Import du model de donnée
import { Task } from "../models/task.model";
// Import du service
import { ToDoService } from "../services/to.do.service";

// Configuration de la directive
@Component({
    selector: 'app-footer',
    templateUrl: 'app/partials/directives/app.footer.directive.html'
})

// Export de la directive
export class AppFooterDirective {

    constructor(
        private toDoService: ToDoService
    ){}
    
    // Fonction appelant la fonction de service comptant les tâches
    // à faire et celles effectués
    // retourne en fonction du paramètre l'une des deux valeurs
    getCount(type: string): void {
        if(type == 'todo') {
            return this.toDoService.getCount().todo_count;
        } else {
            return this.toDoService.getCount().done_count;
        }
    }
}