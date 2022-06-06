import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

// Services
import { CursosService } from './cursos.service';

// Modules
import { CursosRoutingModule } from './cursos.routing.module';


@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})

export class CursosModule {}
