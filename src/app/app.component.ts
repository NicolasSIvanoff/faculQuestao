import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Pessoa {
  resultdiv: number | undefined;
  resultmult: number | undefined;
  resultsub: number | undefined;
  resultrest: number | undefined;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  value1!: number;
  value2!: number;
  value3!: string;
  result!: number;
  conta: any;
  constructor() { }
  sum() {
    this.result = Number(this.value1) + Number(this.value2);

  }

  sub() {
    this.resultsub = Number(this.value1) - Number(this.value2);

  }

  mult() {
    this.resultmult = Number(this.value1) * Number(this.value2);

  }
  rest() {
    this.resultrest = Number(this.value1) % Number(this.value2);

  }

  div() {
    if (Number(this.value2) != 0) {
      this.resultdiv = Number(this.value1) / Number(this.value2);

    }
    else{
      alert('Não é possivel efetuar divisão por 0');
    }
  }
  Aluno(){
    this.conta = this.mult()
    this.conta = this.sub()
    this.conta = this.div()
    this.conta = this.sum()
    this.conta = this.rest()
    {alert("Olá, "+this.value3+ "\n O resultado da soma é : "+this.result+"\n O resultado da subtração é : "+this.resultsub+
     "\n O resultado da multiplicação é : "+this.resultmult+"\n O resultado da divisão é : "+this.resultdiv+"\n O resto da divisão é : "+this.resultrest)}
  }
}
