import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  id: any = '0';
  menuItens: any[] = [{ title: 'Home', link: '' }, { title: 'Cursos', link: '/cursos' }, { title: 'Login', link: '/login' }]
  test: string = ''

  adicionaId(value: any) {
    console.log('test')
    this.id = Number(value);
    this.test = value
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

}
