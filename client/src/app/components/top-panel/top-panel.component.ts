import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Tab } from 'src/app/models/tab';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopPanelComponent implements OnInit {
  
  tabs: Tab[];
  
  constructor(private configService: ConfigService) {
    this.tabs = this.configService.find('topPanel');
  }

  ngOnInit(): void { }
  
}
