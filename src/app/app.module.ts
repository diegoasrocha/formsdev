import { CadastroGuard } from './services/cadastro.guard';
import { AuthGuard } from './services/app.guard';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NgModule } from '@angular/core'; 
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  
import { AppRoutingModule } from './app.routing';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component'; 
import { NavegacaoModule } from './navegacao/navegacao.module'; 


@NgModule({
  declarations: [
    AppComponent, 
    SobreComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NavegacaoModule,  
    AppRoutingModule
  ],
  providers:[
    AuthGuard, CadastroGuard
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
