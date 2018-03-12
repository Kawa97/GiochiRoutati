import {Component} from '@angular/core'
import { Game } from '../Game';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent {

  genres:string[]= ["Fps","Rpg","Moba","Puzzle","Schifo"];
  constructor(private fb: FormBuilder) { this.createForm();}
  values ="";
  form: FormGroup;
  gioco:Game= new Game(0,"Shish","Molto bello","Fps",87,50,"2014");


  createForm(){
    this.form=this.fb.group(
      {name:['',Validators.required],
      description:'',
      genre:['',Validators.required],
      rating:'',
      price:'',
      releaseDate:''
    });
  }
}
