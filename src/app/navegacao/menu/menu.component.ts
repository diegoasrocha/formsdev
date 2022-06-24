import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html' 
})
export class MenuComponent implements OnInit {
  navs: Nav[];

  constructor() {
    this.navs = [];
   }

  ngOnInit(): void {
    this.navs.push({ link: '/cadastro', name: 'Cadastro', exact: true });
    this.navs.push({ link: '/sobre', name: 'Sobre', exact: true });
    this.navs.push({ link: '/produtos', name: 'Produtos', exact: false });
    this.navs.push({ link: '/admin', name: 'Admin', exact: false });
  }

}

interface Nav {
  link: string,
  name: string,
  exact: boolean
}
