import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.scss']
})
export class CampoControlErroComponent implements OnInit {

  @Input() mostraErro: boolean | null = false
  @Input() campo: string = ''

  constructor() { }

  ngOnInit(): void {

  }

}
