
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router'
    import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
import { DetailComponent } from '../detail/detail.component';
import { NotfoundComponent } from '../notfound/notfound.component';
    
    const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo:'home' ,pathMatch:'full'},
        { path: 'lista', component: ListaComponent },
        { path: 'detail/:id', component: DetailComponent },
        { path: '**', component: NotfoundComponent}
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