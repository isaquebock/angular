import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'JS', 'HTML']

  constructor(private logService: LogService){
    console.log('Serviço chamado')
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos
  }

  criarCurso(curso: string) {
    this.logService.consoleLog(`Novo curso criado: ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)

    CursosService.criouNovoCurso.emit(curso)
  }
}
