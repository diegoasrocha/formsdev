import { NgModule } from "@angular/core"; 
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutoRoutngModule } from './produto.route';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { EditarProdutoComponent } from './componentes/editar-produto/editar-produto.component';  

import localePt from '@angular/common/locales/pt';
import { ProdutoService } from "./services/produto.service";
import { ProdutosResolve } from "./services/produtos.resolve";
// import localeExtraBr from '@angular/common/locales/extra/pt';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutngModule    
    ],
    providers: [
        ProdutoService,
        ProdutosResolve
    ],
    exports: [] 
})
export class ProdutoModule {}