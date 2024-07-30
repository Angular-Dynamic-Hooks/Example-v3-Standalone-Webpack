import { Component, Input } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

export interface CarouselImage {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [NgbCarousel, NgbSlide],
  standalone: true
})
export class CarouselComponent{
  @Input() images: CarouselImage[]|undefined;
}
