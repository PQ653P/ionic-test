import { Injectable } from '@angular/core';

@Injectable()
export class MyScopedService {
  private counter = 0;

  constructor() {}

  incrementCounter() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}