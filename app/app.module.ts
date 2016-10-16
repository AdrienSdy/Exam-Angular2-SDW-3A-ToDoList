import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Import du la classe du routing
import { Router } from './app.routing';

// Import du service pour les routes dynamiques
import { ToDoService } from './services/to.do.service';

// Import des componsants
import { AppComponent }  from './app.component';
import { ToDoComponent }  from './components/to.do.component';

// Import des directives
import { AppNavigationDirective } from './directives/app.navigation.directive';
import { ToDoDirective } from './directives/to.do.directive';
import { ToDoAddDirective } from './directives/to.do.add.directive';

@NgModule({
  imports: [
    BrowserModule, FormsModule, Router
  ],
  declarations: [
    AppComponent, ToDoComponent,
    AppNavigationDirective, ToDoDirective, ToDoAddDirective
  ],

  // Ajout du provider pour les routes dynamiques
  providers: [ ToDoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
