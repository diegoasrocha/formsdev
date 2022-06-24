import { User, UserService } from './user.service';
import { Injectable, OnInit } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, OnInit {
    user: User;

    constructor(private userService: UserService) {
        this.userService.userObserver.subscribe(user => {
            this.user = user;
        });
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    canLoad(): boolean {
        return this.user.admin;
    }

    canActivate(): boolean {
        return this.user.logged && this.user.admin;
    }

    alterAdmin(): void {
        this.userService.alterAdmin();
    }

    alterLogged(): void {
        this.userService.alterLogged();
    }
}