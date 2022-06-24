import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(params => {
          this.produto = this.produtoService.obterProdutoById(params['id']);
        });
  }

  salvar(): void {
    // Se comunicar com o backend...

    this.router.navigate(['/produtos']);
  }

}
