// Création d'un model de données: "type: Task"
export class Task {
    // Création des variables
    public id: number;
    public title: string;
    public description: string;
    public archive: boolean;

    // Création du constructeur
    constructor(task: Task){
        // Définition des variable
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.archive = task.archive;
    }
}