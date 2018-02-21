import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ModificaComponent } from './modifica/modifica.component';

const appRoutes: Routes = [
  
  
  { path: 'home', component: HomeComponent },
  
  { path: 'lista', component: ListaComponent },

  { path: 'modifica', component: ModificaComponent },
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
