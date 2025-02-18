import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Injectable()
export class MyScopedService {
  private counter = 0;
  private counterSubject = new BehaviorSubject<number>(this.counter);
  counterObservable$ = this.counterSubject.asObservable();

  private randomNumberSubject = new BehaviorSubject<number>(Math.random());
  randomNumberObservable$ = this.randomNumberSubject.asObservable();

  private stopSubject = new Subject<void>();
  stopObservable$ = this.stopSubject.asObservable();

  private counterInterval: any;
  private randomNumberInterval: any;

  constructor() {
    console.log("MyScopedService inicializálva!");

    this.counterInterval = setInterval(() => {
      this.counter++;
      this.counterSubject.next(this.counter);
      console.log("Számláló értéke:", this.counter);
    }, 1000);

    this.randomNumberInterval = setInterval(() => {
      const randomValue = this.getRandomInt(1, 100);
      this.randomNumberSubject.next(randomValue);
      console.log("Új random szám:", randomValue);
    }, 1000);
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  stopWidgets() {
    console.log('Widgetek leállítva');
    clearInterval(this.counterInterval);
    clearInterval(this.randomNumberInterval);
  }
}