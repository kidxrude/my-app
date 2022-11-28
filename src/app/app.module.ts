import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { SessionListComponent } from './session-list/session-list.component';
import { MapComponent } from './map/map.component';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
