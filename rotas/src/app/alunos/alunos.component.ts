import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  constructor(
    private alunosService: AlunosService
  ) { }

  // Att
  public sub: Subscription = new Subscription()
  public alunos: any[] = []
  public id: any

  // Lifecycles
  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
