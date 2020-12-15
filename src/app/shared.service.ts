import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  behaviorSubject = new BehaviorSubject<string>('default');
  obsBS = this.behaviorSubject.asObservable();
  constructor() { }
}
