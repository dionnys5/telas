import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-caso-publico',
  templateUrl: './editar-caso-publico.component.html',
  styleUrls: ['./editar-caso-publico.component.css']
})
export class EditarCasoPublicoComponent implements OnInit {

  constructor() { }
    teste() {
        alert('Você não pode excluir uma disciplina que está editando');
    }
  ngOnInit() {
  }

}
