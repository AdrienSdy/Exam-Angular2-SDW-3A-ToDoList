// Import du model de donnée: "type: task"
import { Task } from "../models/task.model";

// Export des données: les tâches.
export const TASKS:Task[] =[
    {id: 0, title: 'Contrôle Angular', description: 'Réaliser le contrôle d\' Angular Js dimanche au plus tard.', archive: false},
    {id: 1, title: 'Finir le Framework', description: 'Finaliser le framework kapi mercredi.', archive: false},
    {id: 2, title: 'Rapport de stage', description: 'Faire son rapport de stage pour vendredi.', archive: false},
    {id: 3, title: 'Sujet Mémoire', description: 'Choisir son sujet de mémoire avant lundi 12h00.', archive: false},
]