import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent{

  @Output() event = new EventEmitter<number>();
  @ViewChild('installationAmount') installationAmount: ElementRef<HTMLSelectElement>;
  creditAmount: number = 0;
  monthlyMount: number | undefined = 3;
  calculate = () => {
    this.monthlyMount = this.creditAmount / +this.installationAmount.nativeElement.value;
    this.event.emit((this.monthlyMount));
  }

}
