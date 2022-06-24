import { CadastroGuard } from './services/cadastro.guard';
import { AuthGuard } from './services/app.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
  { 
    path: 'produtos', 
    loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule) 
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  
  { path: '**', component: NotFoundComponent }
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}