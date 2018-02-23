
    import { NgModule } from '@angular/core'
    import { RouterModule, Routes } from '@angular/router'
    import { HomeComponent } from '../home/home.component';
import { ListaComponent } from '../lista/lista.component';
import { ModificaComponent } from '../modifica/modifica.component';
import { DetailComponent } from '../detail/detail.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../AuthGuard';
    
    const routes: Routes = [
        { path: '', redirectTo:'login' ,pathMatch:'full'},
        {   path: 'login' , component:LoginComponent,
        canActivateChild:[AuthGuard],
            children:[
            { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
            { path: 'lista', component: ListaComponent },
            { path: 'detail/:id', component: DetailComponent },
            { path: '**', component: NotfoundComponent}
                    ]
        },
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

    