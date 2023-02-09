import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { delayFadeInOutTrigger } from 'src/app/animations/triggers';
import { Tab } from 'src/app/models/tab';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [delayFadeInOutTrigger]
})
export class SidePanelComponent implements OnInit {

  tabs: Tab[];
  selectedTab: Tab;

  isOpenMode: boolean = true;
  
  constructor(private configService: ConfigService) {
    this.tabs = this.configService.find('sidePanel');
    this.selectedTab = this.tabs[3];
  }

  ngOnInit(): void { }

}
