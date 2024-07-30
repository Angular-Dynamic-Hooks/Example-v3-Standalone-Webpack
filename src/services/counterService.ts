export class CounterService {
  count: number = 1;

  constructor() {
    console.log('counterService construct');
  }

  increment() {
    this.count++;
    console.log(this.count)
  }
}