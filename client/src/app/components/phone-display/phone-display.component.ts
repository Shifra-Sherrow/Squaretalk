import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-display',
  templateUrl: './phone-display.component.html',
  styleUrls: ['./phone-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhoneDisplayComponent implements OnInit {

  @Input() call: any;

  constructor() { }

  ngOnInit(): void { }

}
