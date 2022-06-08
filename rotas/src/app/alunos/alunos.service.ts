import { Injectable } from '@angular/core';
import { Aluno } from './model/alunos';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  constructor() { }

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
  ]

  getAlunos() {
    return this.alunos
  }

  public getAluno(id: any) {
    let alunos = this.getAlunos();

    for (let i = 0; i < alunos.length; i++) {
      if(alunos[i].id == id) {
        return alunos[i];
      }
    }

    return null;
  }
}
