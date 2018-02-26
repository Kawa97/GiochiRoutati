import { Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Router } from '@angular/router'
@Injectable()
export class ChangedisplayService {

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
