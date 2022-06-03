import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService]
})

export class CriarCursoComponent implements OnInit {

  onAddCurso(curso: string) {
    this.cursoService.criarCurso(curso)
  }

  cursos: string[] = []

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos()
  }

}
