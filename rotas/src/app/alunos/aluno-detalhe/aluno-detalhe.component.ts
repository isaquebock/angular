import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../model/alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})

export class AlunoDetalheComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute,
    private cursosService: AlunosService,
    private router: Router
  ) {}

  public sub: Subscription = new Subscription()
  public alunos: any[] = []
  public id: any
  public aluno: any

  public editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }



  ngOnInit(): void {
    this.alunos = this.cursosService.getAlunos()

    this.sub = this.currentRoute.data.subscribe(
      info => {
        this.aluno = info['aluno']
        console.log(this.aluno)
      }
    )

  }

}
