import { Injectable } from '@angular/core';
import { Session } from '../shared/session.model';
import { SESSIONS } from '../shared/sessions';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  getSessions(): Session[]{
    return SESSIONS.slice(0);
  }
  getTotalSessions(allSessions: Session[]){
    return allSessions.length;
  }
  getTotalDistance(allSessions: Session[]){
    let totalDistance = 0;
    for(var i = 0; i < allSessions.length; i++){
      totalDistance += allSessions[i].distance;
    }
    return totalDistance;
  }
  getFirstDate(allSessions: Session[]){
    let earliestDate = new Date('01/01/9999');
    for(var i = 0; i < allSessions.length; i++) {
      let currentDate = allSessions[i].date;
      if (currentDate < earliestDate) {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }
}
