import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  CollapsibleWellComponent,
  DurationPipe,
  UpvoteComponent,
  VoteService
} from './events/index';

import {EventsAppComponent} from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective} from './common/index';

let toastr: Toastr = window['toastr'];
let jQuery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService,
    {provide: TOASTR_TOKEN,  useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    },
    EventListResolverService,
    AuthService,
    VoteService
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
