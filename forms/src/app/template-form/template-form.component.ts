import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public user: User = {
    nome: '',
    email: '',
    endereco: {
      cep: null,
      numero: null,
      complemento: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  }

  public validatedForm: boolean = true

  public onSubmit(form: NgForm) {
    console.log(form.value)
    console.log(this.user)

    this.http.post('https://ptsv2.com/t/21aaq-1654781545', JSON.stringify(form.value))
      .pipe(map(data => data))
      .subscribe(data => console.log(data))
  }

  public consultaCep(event: Event, form: NgForm) {
    let cep = (event.target as HTMLInputElement).value

    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          .pipe(map((data: any) => data))
          .subscribe(dados => this.populaDadosForm(dados, form))
      }
    }
  }

  public populaDadosForm(dados: any, form: NgForm) {

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        //numero: null,
        complemento: '',
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  ngOnInit(): void {

  }

}
