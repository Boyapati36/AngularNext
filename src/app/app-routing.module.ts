import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
  // { path: 'characters', component: CharacterListComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', 
    component: AppComponent,
    children: [
      {
        path:'characters', 
        component: CharacterListComponent
      },
      {
        path:'new', 
        component: NewComponentComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
