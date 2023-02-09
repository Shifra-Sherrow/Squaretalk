import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SvgIconsModule } from '@ngneat/svg-icon';

import { AppRoutingModule } from './app-routing.module';

import { SwitchCasesDirective } from './directives/switch-cases.directive';

import { PhonePipe } from './pipes/phone.pipe';
import { DurationPipe } from './pipes/duration.pipe';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ClientCommunicationComponent } from './components/client-communication/client-communication.component';
import { LastCommunicationComponent } from './components/last-communication/last-communication.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelinePartComponent } from './components/timeline-part/timeline-part.component';
import { PhoneDisplayComponent } from './components/phone-display/phone-display.component';
import { ChatDisplayComponent } from './components/chat-display/chat-display.component';

import icons from '../assets/svg/svg-icons';

const modules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  SvgIconsModule.forRoot({ icons })
];

const directives = [
  SwitchCasesDirective
];

const pipes = [
  PhonePipe,
  DurationPipe
];

const components = [
  AppComponent,
  MainLayoutComponent,
  TopPanelComponent,
  ClientListComponent,
  SidePanelComponent,
  ClientCommunicationComponent,
  LastCommunicationComponent,
  TimelineComponent,
  TimelinePartComponent,
  PhoneDisplayComponent,
  ChatDisplayComponent
];

@NgModule({
  declarations: [
    directives,
    pipes,
    components
  ],
  imports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
