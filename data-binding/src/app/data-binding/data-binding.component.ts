import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})


export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com';
  urlImage: string = 'http://lorempixel.com.br/500/400/?1'
  currentValue: string = ''
  booleanValue: boolean = true
  savedValue: string  = ''
  isMouseOver: boolean = false
  name: string = 'abc'

  nomeDoCurso: string = 'Angular'

  getValue() { return 1 }
  getCourseLike() { return true }

  buttonEvent() {
    alert('botao foi clicado po')
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value)

    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(event: any) {
    this.savedValue = event
  }

  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  mouseOver() {
    this.isMouseOver = true
    console.log(this.isMouseOver)
  }

  mouseOut() {
    this.isMouseOver = !this.isMouseOver
    console.log(this.isMouseOver)
  }

  onMudouValor(event: any) {
    console.log(event.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
