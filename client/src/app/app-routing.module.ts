import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCommunicationComponent } from './components/client-communication/client-communication.component';

const routes: Routes = [
  { path: ':clientId', component: ClientCommunicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
