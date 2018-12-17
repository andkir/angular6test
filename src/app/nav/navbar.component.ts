import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventsService } from "../events";

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #serachForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none;}}
    li > a.active {color: #f97924}
    `]
})
export class NavbarComponent{
    searchTerm: string = "";
    foundSessions: ISession[];
    constructor(public auth: AuthService, private eventService: EventsService) {
        console.log(auth);
    }

    searchSessions(searchTerm: string){
        this.eventService.searchForSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                //console.log(this.foundSessions);
            }
        );
    }
}