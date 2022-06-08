import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AlunosRoutingModule } from './alunos-routing.module';
import { RouterModule } from '@angular/router';

// Components
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

// Services
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosGuard } from '../guards/alunos-guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
