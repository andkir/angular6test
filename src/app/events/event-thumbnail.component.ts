import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IEvent} from './shared/index';

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
        .green {color: green  !important;}
        .bold {font-weight: bold;}
        .well div {color: #bbb;}
        .thumbnail {min-height: 210px;}
    `]
})
export class EventThumbnailComponent{
    @Input() event: IEvent;

    logFoo(){
        console.log("Foo");
    }

    getCssClass(){
        const isEarlyStart = this.event.time==='8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}