import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoaded: BehaviorSubject<boolean>;
  constructor() {
    this.isLoaded = new BehaviorSubject<boolean>(false);
  }

  show() {
    this.isLoaded.next(true);
  }
  hide() {
    this.isLoaded.next(false);
  }
}
