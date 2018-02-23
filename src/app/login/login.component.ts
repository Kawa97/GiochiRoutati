import { Component, OnInit } from '@angular/core';
import { ChangedisplayService } from '../changedisplay.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private changediplayService :ChangedisplayService) {
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }

  login(){
    this.changediplayService.Login();
  }
  
}
