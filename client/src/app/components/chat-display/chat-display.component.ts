import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

import { CallType } from 'src/app/enums/call-type';

@Component({
  selector: 'chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatDisplayComponent implements OnInit, OnChanges {

  @Input() communication: any[] = [];
  @Input() type: CallType = CallType.PHONE;
  
  constructor() { }

  ngOnInit(): void { }
  
  ngOnChanges(): void {
    this.communication.forEach((item: any, index: number) => {
      index < this.communication.length - 1 ? item.last = item.isClient !== this.communication[index + 1].isClient : item.last = true;
    });
  }

}
