import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  @Input() calls: any[] = [];
  @Input() currCall: any;

  @Output() selectCall: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

}
