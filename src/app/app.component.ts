import { Component } from '@angular/core';
import { ChangedisplayService } from './changedisplay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged:boolean;
  
  constructor(private changediplayService :ChangedisplayService) {
    this.changediplayService.mySubject$.subscribe(logged =>{this.logged=logged;});
  }
}
