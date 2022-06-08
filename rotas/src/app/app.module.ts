import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

// Services
import { CursosService } from './cursos/cursos.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos-guard';
import { AlunosGuard } from './guards/alunos-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    //CursosModule,
    AppRoutingModule,
    FormsModule,
    //AlunosModule,
  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuard,
    CursosGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
