import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { ChangedisplayService } from './changedisplay.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private changedisplayService :ChangedisplayService,private router:Router){}
canActivate() {
    if(this.changedisplayService.controllaLogin()){
        console.log("Loggato");
        return true;
    }
    else{
        this.router.navigate(["/login"]);
        return false;
    }
    }

    canActivatelogin() {
        if(this.changedisplayService.controllaLogin()){
            this.router.navigate(["/home"]);
            return false;
        }
        else{
            
            return true;
        }
        }
}