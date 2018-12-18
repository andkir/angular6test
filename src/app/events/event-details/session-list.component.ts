import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoteService } from './vote.service';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[];
    
    constructor(private auth: AuthService, private voteSvc: VoteService){

    }

    ngOnChanges() {
        if(this.sessions){
            this.filterSessions();
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
            this.visibleSessions.sort(sortByVotesDesc) 
        }
     }

    filterSessions(){
        if(this.filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else{
            this.visibleSessions = this.sessions.filter(x=> x.level.toLocaleLowerCase() === this.filterBy)
        }
    }

    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voteSvc.removeUser(session, this.auth.currentUser.userName);
        }
        else{
            this.voteSvc.addUser(session, this.auth.currentUser.userName);
        }
    }

    userHasVoted(session: ISession){
        return this.voteSvc.userHasVoted(session, this.auth.currentUser.userName);
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1;
    else if( s1.name===s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}