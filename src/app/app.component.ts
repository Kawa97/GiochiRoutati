import { Component, OnInit } from '@angular/core';
import { ChangedisplayService } from './changedisplay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logged:boolean;

  ngOnInit(){
    
  }
  
  constructor(private changediplayService :ChangedisplayService) {
    this.logged = sessionStorage.getItem('username') !== null && sessionStorage.getItem('username') !== undefined;
    this.changediplayService.mySubject$.subscribe(logged =>{this.logged=logged;});
  }
}
