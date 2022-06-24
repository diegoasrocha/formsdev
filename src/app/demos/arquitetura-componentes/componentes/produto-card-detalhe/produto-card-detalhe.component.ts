import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from './../../models/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.css']
})
export class ProdutoCardDetalheComponent {

  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<Produto>;  

  constructor(){
    this.status = new EventEmitter<Produto>(); 
  }

  emitirEvento(){ 
    this.status.emit(this.produto);
  } 
}
