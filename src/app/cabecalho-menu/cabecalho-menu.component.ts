import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecalho-menu',
  templateUrl: './cabecalho-menu.component.html',
  styleUrls: ['./cabecalho-menu.component.css']
})
export class CabecalhoMenuComponent implements OnInit {
  @Input() titulo = null;
  constructor() { }

  ngOnInit() {
  }

}
