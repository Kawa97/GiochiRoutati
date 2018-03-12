import { Component, OnInit, Input} from '@angular/core';
import { ChangedisplayService } from '../changedisplay.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username:string;
  password:string;

  constructor(private changediplayService :ChangedisplayService,router :Router) {
    if(changediplayService.controllaLogin())
    {
      router.navigate(["/home"]);
    }
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }

  login(){
    this.changediplayService.Login(this.username,this.password);
  }

}
