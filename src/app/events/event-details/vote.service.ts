import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class VoteService {
    constructor() { }

    userHasVoted(session: ISession, username: string){
        return session.voters.some(x=>x === username);
    }

    removeUser(session: ISession, username: string){
        session.voters = session.voters.filter(voter=> voter !== username );
    }

    addUser(session: ISession, username: string){
        session.voters.push(username);
    }
}