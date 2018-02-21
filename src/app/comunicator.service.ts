import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Character } from './Character';


@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<Character>();

  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: Character) { 
    console.log('change');
    this.mySubject.next(value); 
  }

}