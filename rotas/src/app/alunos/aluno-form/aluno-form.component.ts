import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute,
    private cursosService: AlunosService,
    private router: Router
  ) {}

  public sub: Subscription = new Subscription()
  public alunos: any[] = []
  public id: any
  public aluno: any

  ngOnInit(): void {
    this.alunos = this.cursosService.getAlunos()

    this.sub = this.currentRoute.params.subscribe((params: any) => {
      this.id = params['id']
      this.aluno = this.alunos[--this.id];
      console.log(this.id, this.aluno)
    })
  }

}
