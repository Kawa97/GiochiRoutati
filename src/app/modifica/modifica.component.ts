import {Component} from '@angular/core'
import { Game } from '../Game';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent {

  genres:string[]= ["Fps","Rpg","Moba","Puzzle","Schifo"];
  constructor() { }
  values ="";
  gioco:Game= new Game(0,"Shish","Molto bello","Fps",87,50,"2014");

}
