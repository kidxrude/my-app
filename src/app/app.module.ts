import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

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
    NgbModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
