import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolverService
} from './events/index';

import {EventsAppComponent} from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service'
import { appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


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
    EventListResolverService,
    AuthService
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
