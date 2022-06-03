import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {
  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
  }

  cursos: string[] = [];

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)
    )

    CursosService.criouNovoCurso.subscribe(
      curso => (this.cursos.push(curso))
    )
  }

}
