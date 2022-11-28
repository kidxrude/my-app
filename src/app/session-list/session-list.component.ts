import { Component, OnInit } from '@angular/core';
import { Session } from '../shared/session.model';
import { SessionService } from '../services/session.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = [];
  totalSessions: number = 0;
  totalDistance: number = 0;
  firstDate: Date | undefined;

  isOpen = true;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessions = this.sessionService.getSessions();
    this.totalSessions = this.sessionService.getTotalSessions(this.sessions);
    this.totalDistance = this.sessionService.getTotalDistance(this.sessions);
    this.firstDate = this.sessionService.getFirstDate(this.sessions);
  }

}
