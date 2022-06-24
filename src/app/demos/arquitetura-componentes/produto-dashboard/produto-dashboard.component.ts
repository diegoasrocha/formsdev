import { ProdutoService } from './../services/produto.service';
import { ProdutoCardDetalheComponent } from './../componentes/produto-card-detalhe/produto-card-detalhe.component';
import { QueryList, ViewChildren } from '@angular/core';
import { ProdutoCountComponent } from './../componentes/produto-count/produto-count.component';
import { AfterViewInit } from '@angular/core';
import { Produto } from './../models/produto';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { fromEvent, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html'
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit { 
  produtos: Produto[];

  @ViewChild('teste', { static: false })
  mensagemTela: ElementRef;

  @ViewChild(ProdutoCountComponent, { static: false})
  contador: ProdutoCountComponent;

  @ViewChildren(ProdutoCardDetalheComponent)
  produtoCards: QueryList<ProdutoCardDetalheComponent>;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() { 
    this.produtos = this.route.snapshot.data['produtos'];

    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    
    clickTexto.subscribe(() => {
      alert('Clicou no texto!');
    });

    // console.log('Contagem atual:', this.contador.contadorAtivos());

    // this.produtoCards.forEach(card => {
    //   console.log(card.produto);
    // });
  }

  mudarStatus(produto: Produto) {
    produto.ativo = !produto.ativo;
  } 

}
