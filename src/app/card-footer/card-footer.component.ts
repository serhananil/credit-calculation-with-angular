import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnChanges{
@Input() monthlyMount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
