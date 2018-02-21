import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ModificaComponent } from './modifica/modifica.component';
import { HeaderComponent } from './header/header.component';
import {DemoRouterModule} from './router/router.Module';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    ModificaComponent,
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    DemoRouterModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
