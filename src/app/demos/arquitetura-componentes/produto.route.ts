import { ProdutosResolve } from './services/produtos.resolve';
import { EditarProdutoComponent } from './componentes/editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component'; 
import { ProdutoAppComponent } from './produto.app.component';

const produtosRouterConfig: Routes = [
    { 
        path: '', component: ProdutoAppComponent, 
        children: [
            { path: '', redirectTo: 'todos' },
            { 
                path: ':estado', 
                component: ProdutoDashboardComponent, 
                resolve: { 
                    produtos: ProdutosResolve 
                },
                data: {
                    teste: 'informação'
                } 
            },
            { path: ':estado/editar/:id', component: EditarProdutoComponent },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(produtosRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutngModule {}