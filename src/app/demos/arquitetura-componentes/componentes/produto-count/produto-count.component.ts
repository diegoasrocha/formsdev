import { Produto } from './../../models/produto';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html'   
})
export class ProdutoCountComponent {
  @Input()
  produtos: Produto[];

  contadorAtivos(): number { 
    return this.produtos?.filter((produto: Produto) => produto.ativo).length;
  }
}
