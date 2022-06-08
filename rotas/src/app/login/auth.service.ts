import { Injectable, EventEmitter, Output } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  @Output() mostrarMenu = new EventEmitter<boolean>()

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'isaque' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/'])

      this.mostrarMenu.emit(true)
    } else {
      this.mostrarMenu.emit(false)
    }

    return this.usuarioAutenticado
  }

  public usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }
}
