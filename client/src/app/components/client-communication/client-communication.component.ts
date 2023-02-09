import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'client-communication',
  templateUrl: './client-communication.component.html',
  styleUrls: ['./client-communication.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientCommunicationComponent implements OnInit {

  client: any;
  currCall: any;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService) {
    this.route.paramMap.subscribe(paramMap => {
      const clientId = paramMap.get('clientId');
      const allClients = this.clientService.clients.getValue();

      this.client = allClients.find(c => c.id === clientId);
      this.currCall = this.client.lastCalls[0];
    });
  }

  ngOnInit(): void { }

  selectCall(id: string): void {
    this.currCall = this.client.lastCalls.find((c: any) => c.id === id);
  }

}
