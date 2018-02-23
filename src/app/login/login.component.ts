import { Component, OnInit, Input} from '@angular/core';
import { ChangedisplayService } from '../changedisplay.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username:String;
  password:String;

  constructor(private changediplayService :ChangedisplayService) {
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }

  login(){
    this.changediplayService.Login(this.username,this.password);
  }

}
