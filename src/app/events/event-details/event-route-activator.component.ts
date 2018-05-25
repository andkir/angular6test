import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.GetEventById(+route.params['id']);

        if(!eventExist)
            this.router.navigate(['/404']);

        return eventExist;
    }
    constructor(private router: Router, private eventService: EventsService) { }
}