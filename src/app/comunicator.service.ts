import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Game } from './Game';


@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<Game>();

  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: Game) { 
    console.log('change');
    this.mySubject.next(value); 
  }

}