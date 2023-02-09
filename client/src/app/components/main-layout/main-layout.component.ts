import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainLayoutComponent implements OnInit {
  
  constructor(private clientService: ClientService) {
    this.clientService.load();
  }

  ngOnInit(): void { }

}
