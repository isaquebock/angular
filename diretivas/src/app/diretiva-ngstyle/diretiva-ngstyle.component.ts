import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  tamanhoFonte: any = 50;
  ativo: boolean = false;

  ativar() {
    this.ativo = !this.ativo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
