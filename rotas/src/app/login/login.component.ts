import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public error_message: String = ''

  constructor(private authService: AuthService) { }

  public fazerLogin() {
    this.authService.fazerLogin(this.usuario)

  }

  ngOnInit(): void {
  }

}
