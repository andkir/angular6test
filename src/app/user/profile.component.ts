import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  firstName;
  lastName;
  profileForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    
  }
  ngOnInit(): void {
    console.log(this.auth);
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfileForm(formValues){
    console.log(formValues);
    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(["events"]);
    }
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }
}