import { Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ChangedisplayService{

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

  Logout(){
    sessionStorage.clear();
    this.mySubject.next(false);
    this.router.navigate(["/login"]);
  }
}
