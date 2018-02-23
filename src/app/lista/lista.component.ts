import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ComunicatorService } from '../comunicator.service';
import { Router } from '@angular/router';
import { Game } from '../Game';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  items: Game[];
  
  constructor(private listService: ListService,private router: Router){
  }

  ngOnInit() {
      this.items = this.listService.getGamesList();
  }

  ngOnDestroy() {
  }
  selectItem(item: Game){
    this.router.navigate(["/detail/"+item.id])
  }
}