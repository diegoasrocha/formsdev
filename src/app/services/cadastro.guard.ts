import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CadastroComponent } from '../demos/reactiveForms/cadastro/cadastro.component';

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
    
    canDeactivate(component: CadastroComponent) { 
        if(component.mudancasNaoSalvas){
            return window.confirm('Deseja realmente sair?');
        }

        return true;
    }
    
}