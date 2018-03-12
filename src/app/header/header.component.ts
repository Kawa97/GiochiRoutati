import { Component, OnInit } from '@angular/core'
import { ChangedisplayService } from '../changedisplay.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string="carlo";
  constructor(private changediplayService :ChangedisplayService) { }

  ngOnInit() {
    this.name=sessionStorage.getItem('username');
  }

  logout(){
    this.changediplayService.Logout();
  }
}
