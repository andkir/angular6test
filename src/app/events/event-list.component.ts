import { Component, OnInit } from '@angular/core'
import {EventsService} from './shared/events.service'
import {ToastrService} from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit{
  events: any;

  constructor(private eventsService: EventsService, private toastr: ToastrService, private route: ActivatedRoute){

  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }

  ngOnInit(){
   // this.eventsService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }
    
}