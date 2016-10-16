import { Injectable } from '@angular/core';
// Import du model de donnée
import { Task } from '../models/task.model';
// Import des données
import { TASKS } from '../datas/task.data';

@Injectable()

export class ToDoService {

    private TASKS = TASKS;

// Permet de récupérer le tableau des tâches
    getTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }
    
// Permet de mettre à jour une tâche en la plaçant en archivé
    setArchive(task: Task): void {
        task.archive = true;
    }

// Permet d'ajouter une tâche
    addTask(data: Task): void {
        this.TASKS.push(data);
    }

    lengthTasks() {
        return this.TASKS.length;
    }
}