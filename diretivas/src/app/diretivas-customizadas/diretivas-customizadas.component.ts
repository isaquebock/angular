import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {
  cursosDisponiveis: boolean = true
  cursos: string[] = ['Angular', 'CSS', 'HTML']

  mostrarCursos() {
    this.cursosDisponiveis = !this.cursosDisponiveis
  }

  constructor() { }

  ngOnInit(): void {
  }

}
