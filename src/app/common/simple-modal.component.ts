import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styles: [`
        .modal-body {height: 250px; overflow-y: scroll;}
    `]
})
export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalDialog') modalRef: ElementRef;
    
    constructor(@Inject(JQ_TOKEN) private $:any) { 

    }

    ngOnInit() { 

    }

    OnItemClicked(){
        this.$(this.modalRef.nativeElement).modal('hide');
    }
}