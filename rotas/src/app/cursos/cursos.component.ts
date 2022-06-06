import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina: number = 0;
  inscricao: Subscription = new Subscription;

  proximaPagina() {
    this.router.navigate(['/cursos'], {
      queryParams: { 'pagina': ++this.pagina }
    })
  }

  constructor(
    private cursosService: CursosService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
    this.inscricao = this.currentRoute.queryParams.subscribe(
      (queryParams: any) => this.pagina = queryParams['pagina']
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
