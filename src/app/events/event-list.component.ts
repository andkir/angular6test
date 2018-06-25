import { Component, OnInit } from '@angular/core'
import {EventsService} from './shared/events.service'
import { ActivatedRoute } from '@angular/router';
import {IEvent} from './shared/index';

@Component({
    templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit{
  events: IEvent[];

  constructor(private eventsService: EventsService, private route: ActivatedRoute){

  }

  ngOnInit(){
   // this.eventsService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }
    
}