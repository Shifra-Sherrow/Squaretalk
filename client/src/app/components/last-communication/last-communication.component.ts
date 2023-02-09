import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { CallType } from 'src/app/enums/call-type';

@Component({
  selector: 'last-communication',
  templateUrl: './last-communication.component.html',
  styleUrls: ['./last-communication.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LastCommunicationComponent implements OnInit {

  @Input() currCall: any;

  callTypeEnum = CallType;
  
  constructor() { }

  ngOnInit(): void { }

}
