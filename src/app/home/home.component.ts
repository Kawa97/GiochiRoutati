import { Component, OnInit } from '@angular/core';
import { ChangedisplayService } from '../changedisplay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private changediplayService :ChangedisplayService) {
  }

  ngOnInit() {
  }

}
