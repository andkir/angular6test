import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './events.service';
import {Subject, pipe} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable()
export class EventListResolverService implements Resolve<any> {
    constructor(private eventService: EventsService) {
       
        
    }
    resolve(){
        return this.eventService.getEvents();
    }
}