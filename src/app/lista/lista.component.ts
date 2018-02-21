import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Character } from '../Character';
import { ComunicatorService } from '../comunicator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  items: Character[];
  
  constructor(private listService: ListService,private router: Router){
  }

  ngOnInit() {
      this.items = this.listService.getCharactersList();
  }

  ngOnDestroy() {
  }
  selectItem(item: Character){
    this.router.navigate(["/detail/"+item.id])
  }
}