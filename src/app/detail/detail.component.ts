import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ListService } from '../list.service';
import { Game } from '../Game';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  currentGame: Game;

  constructor(private route: ActivatedRoute, private listService: ListService) { 
    this.route.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
          this.currentGame = this.listService.getGameById(params['id']);
      }
  });
  }


}
