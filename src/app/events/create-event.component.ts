import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    constructor(private router: Router) { }

    isDirty: boolean = true;

    cancel(){
        this.router.navigate(["/events"]);
    }

    ngOnInit() { }
}