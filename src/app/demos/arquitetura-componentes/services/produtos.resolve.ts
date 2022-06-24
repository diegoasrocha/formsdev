import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"; 
import { ProdutoService } from './produto.service';
import { Produto } from "../models/produto";

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
    
    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot): Produto[] {
        return this.produtoService.obterProdutos(route.params['estado']);
    }

}