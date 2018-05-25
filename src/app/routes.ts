import { Routes} from '@angular/router'
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"]},
    {path: 'events', component: EventListComponent, resolve: {
        events: EventListResolverService
    }},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]