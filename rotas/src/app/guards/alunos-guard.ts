import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean {

    console.log('rota filha : alunos')

    if(state.url.includes('editar')) {
      //alert('Usuário não autenticado')
      //return false;
    }

    return true


  }
}
