import { Component, Output } from "@angular/core";
import {EventsService} from '../shared/events.service';
import {ActivatedRoute, Params} from "@angular/router"
import {IEvent, ISession} from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding: 0 20px 0 20px;}
        .event-image { height: 100px;}
        a {cursor: pointer;}
    `]
})
export class EventDetailsComponent{
    event: IEvent;
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    constructor(private eventService: EventsService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.event = this.event = this.eventService.GetEventById(+params['id']);
            this.addMode = false;
        });
       // this.event = this.eventService.GetEventById(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));

        session.id = nextId+1;

        this.event.sessions.push(session);

        this.eventService.updateEvent(this.event);

        this.addMode = false;
    }

    cancelNewSession(){
        this.addMode = false;
    }
}