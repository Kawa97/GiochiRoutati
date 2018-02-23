import { Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable()
export class ChangedisplayService {

  constructor(private router: Router) { }

  private mySubject = new Subject<boolean>();

  public mySubject$ = this.mySubject.asObservable();

  Login(username:String,password:String){
    if(username=="ciao"){
    this.mySubject.next(true);
    this.router.navigate(["/home"]);
    }
    else {console.log("bhoo")}
  }
}
