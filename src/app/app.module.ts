import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import {CreateEventComponent} from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    },
    EventListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){

  if(component.isDirty){
    //return window.confirm('You have not saved the event, do you really want ot cancel?');
  }

  return true;
}
