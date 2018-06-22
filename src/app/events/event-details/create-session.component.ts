import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession } from '../shared';
import { restrictedWords } from 'src/app/common/restrictedWords.validator';

@Component({
    selector: "create-session",
    templateUrl: 'create-session.component.html',
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px;}
    .error input, error select, .error textarea {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})

export class CreateSessionComponent implements OnInit {
   @Output() saveNewSession: EventEmitter<any> = new EventEmitter();
   @Output() cancelNewSession: EventEmitter<any> = new EventEmitter();
   newSessionForm: FormGroup;
   name: FormControl;
   presenter: FormControl;
   duration: FormControl;
   level: FormControl;
   abstract: FormControl;

    ngOnInit() {
        
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,  Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);
        this.name = new FormControl('', Validators.required);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    saveSession(formValues){
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration, 
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters:[]
        }

        console.log(session);

        this.saveNewSession.emit(session);
    }
}