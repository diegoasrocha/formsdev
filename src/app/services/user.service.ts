import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UserService {
    private user: User

    userObserver: Observable<User>;

    constructor() {
        this.user = { admin: false, logged: false };

        this.userObserver = new Observable((observer) => {
            observer.next(this.user);
        });
    }     

    alterAdmin(): void {
        this.user.admin = !this.user.admin;
    }

    alterLogged(): void {
        this.user.logged = !this.user.logged;
    }
}

export interface User {
    admin: boolean,
    logged: boolean
}