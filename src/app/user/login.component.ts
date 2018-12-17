import {Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { color: red; float: right; padding-left: 15px; }
    `]
})
export class LoginComponent{
    userName: string;
    password: string;    
    hghg:string;
    mouseOverLogin: boolean;
    constructor(private auth: AuthService, private router: Router) {
        this.hghg='uuu';
        //this.userName = "test";
       //this.password="password";
    }

    login(formValue){
        console.log(this);
        console.log(formValue);
        console.log(this.userName);

        console.log(this.password);

       this.auth.loginUser(formValue.userName, formValue.password);
       this.router.navigate(['events']);
    }


    cancel(){
        this.router.navigate(['events']);
     }
}