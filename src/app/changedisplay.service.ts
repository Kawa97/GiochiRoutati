import { Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ChangedisplayService implements CanActivate{

  canActivate() {
    if(!this.controllaLogin()){
        console.log("Sloggato");
        return true;
    }
    else{
        this.router.navigate(["/home"]);
        return false;
    }
    }
  constructor(private router: Router) { }

  private mySubject = new Subject<boolean>();

  public mySubject$ = this.mySubject.asObservable();

  controllaLogin():boolean{
    if(sessionStorage.getItem('username')!=null){
return true;
    }
    else  {return false}
  }

  Login(username:string,password:string){
    if(username=="ciao"&&password=="ciao"){
    sessionStorage.setItem('username',username);
    this.mySubject.next(true);
    this.router.navigate(["/home"]);
    }
    else {console.log("bhoo")}
  }

}
