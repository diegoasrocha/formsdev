import { Observable } from 'rxjs';
import { User, UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html' 
})
export class MenuComponent implements OnInit {
  navs: Nav[];
  user: User;

  constructor(private userService: UserService) {
    this.navs = [];
   }

  ngOnInit(): void {
    this.navs.push({ link: '/cadastro', name: 'Cadastro', exact: true });
    this.navs.push({ link: '/sobre', name: 'Sobre', exact: true });
    this.navs.push({ link: '/produtos', name: 'Produtos', exact: false });
    this.navs.push({ link: '/admin', name: 'Admin', exact: false });

    this.userService.userObserver.subscribe(user => {
      this.user = user; 
    }); 
  }

  alterarAdmin(): void {
    this.userService.alterAdmin();
  }

  alterarLogged(): void {
    this.userService.alterLogged();
  }

}

interface Nav {
  link: string,
  name: string,
  exact: boolean
}
