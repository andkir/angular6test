import { Routes} from '@angular/router'
import { Error404Component } from './errors/404.component';
import {
    EventListComponent,
    EventThumbnailComponent,
    EventsService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    CreateSessionComponent
  } from './events/index';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"]},
    {path: 'events', component: EventListComponent, resolve: {
        events: EventListResolverService
    }},
    {path: 'events/seesion/new', component: CreateSessionComponent},
    {path: 'events/:id', component: EventDetailsComponent/*, canActivate: [EventRouteActivator]*/},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: 'events/session/new', component: CreateSessionComponent}
]