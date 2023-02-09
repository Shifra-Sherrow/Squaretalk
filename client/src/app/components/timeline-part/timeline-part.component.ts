import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { ColorPerType } from 'src/app/enums/color-per-type';

@Component({
  selector: 'timeline-part',
  templateUrl: './timeline-part.component.html',
  styleUrls: ['./timeline-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelinePartComponent implements OnInit {

  @Input() call: any;
  @Input() selectedCall: any;

  @Output() selectCall: EventEmitter<string> = new EventEmitter();
  
  hoverColor: string = 'var(--white)';
  
  constructor() { }
  
  ngOnInit(): void { }
  
  getBgc(type: string): string {
    return ColorPerType[type as keyof typeof ColorPerType];
  }

  changeStyle(ev: any): void {
    this.hoverColor = ev.type === 'mouseover' ? this.getBgc(this.call.type) : 'var(--white)';
  }

}
