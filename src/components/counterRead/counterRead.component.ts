import { Component } from '@angular/core';
import { CounterService } from '../../services/counterService';

@Component({
  selector: 'app-counter-read',
  templateUrl: './counterRead.component.html',
  styleUrls: ['./counterRead.component.scss'],
  standalone: true
})
export class CounterReadComponent{
  constructor(public counterService: CounterService) {}
}
