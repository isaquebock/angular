import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})

export class CursoDetalheComponent implements OnInit {
  id: string = ''
  inscricao: Subscription = new Subscription()
  curso: any

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.currentRoute.params.subscribe((params: any) => {
      this.id = params['id']
    });

    console.log('verifica se esta sendo passado a var:', this.id)
    this.curso = this.cursosService.getCurso(this.id);

    console.log(this.curso)

    if(this.curso == null) {
      this.router.navigate(['cursos/404', ])
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  ngOnChanges() {
  }

}
