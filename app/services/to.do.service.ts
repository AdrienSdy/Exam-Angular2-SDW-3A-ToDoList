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
    
// Permet de supprimer une tâche
    delete(task: Task){
        var index = TASKS.indexOf(task);
        TASKS.splice(index, 1);
    }

// Retorune le compte des tâches à réaliser et celles effectués
    getCount(): any{
        var done_count: number;
        var todo_count: number;
        done_count = 0;
        todo_count = 0;
        for (var index = 0; index < TASKS.length; index++) {
            if (TASKS[index]['archive']) {
                done_count++;
            } else {
                todo_count++;
            }
        }
        return {'todo_count':todo_count, 'done_count':done_count};
    }  
}