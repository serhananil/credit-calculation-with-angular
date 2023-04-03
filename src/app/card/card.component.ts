import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  monthlyMount: number = 0;

  calculate = (event:number) => {
    this.monthlyMount = event;
  }

}
