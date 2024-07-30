import { Component } from '@angular/core';
import { CounterService } from '../../services/counterService';

@Component({
  selector: 'app-counter-write',
  templateUrl: './counterWrite.component.html',
  styleUrls: ['./counterWrite.component.scss'],
  standalone: true
})
export class CounterWriteComponent{
  constructor(public counterService: CounterService) {}
}
