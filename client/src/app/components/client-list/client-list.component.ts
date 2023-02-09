import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientListComponent implements OnInit, OnDestroy {

  clients: any[] = [];

  subscriptions: Subscription[] = [];

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
    const clientsChange = this.clientService.clients
      .subscribe(list => {
        this.clients = list;
        this.clients[0].selected = true;
        this.router.navigate([this.clients[0]?.id || ''], { relativeTo: this.route });
      });

    this.subscriptions = [clientsChange];
  }

  ngOnInit(): void { }

  selectClient(id: string): void {
    this.clients.forEach(c => c = c.selected = c.id === id);
    this.router.navigate([id], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
