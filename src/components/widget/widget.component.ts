import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  standalone: true
})
export class WidgetComponent{
  @Input() imgUrl: string|undefined;
}
