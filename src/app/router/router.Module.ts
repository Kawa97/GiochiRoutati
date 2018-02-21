
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router'
    import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
    
    const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo:'home' ,pathMatch:'full'},
        { path: 'lista', component: ListaComponent },
        { path: 'modifica', component: ModificaComponent },
        ];
    @NgModule({
    imports: [
    RouterModule.forRoot(
        routes,
    )
    ],

    exports: [
    RouterModule
    ]
    })
    export class DemoRouterModule{}