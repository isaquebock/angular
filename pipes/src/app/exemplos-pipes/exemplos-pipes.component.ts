import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Nome do Livro',
    rating: 4.54321,
    numeroPaginas: 350,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.google.com'
  };

  livros: string[] = ['Angular 2', 'Javascript']

  filtro: string = '';

  addCurso(novoValor: string) {
    this.livros.push(novoValor)
    console.log(this.livros)
  }

  obterCursos() {
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
          return true
        }
        return false;
    })
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('valor'), 2000)
  });

  valorAsync2 = interval(2000)
  .pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
