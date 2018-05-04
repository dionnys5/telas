import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { FormularioPublicoComponent } from './formulario-publico/formulario-publico.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AreaDeCasosPublicosComponent } from './area-de-casos-publicos/area-de-casos-publicos.component';
import { EditarCasoPublicoComponent } from './editar-caso-publico/editar-caso-publico.component';
import { AreaDeCasosPrivadosComponent } from './area-de-casos-privados/area-de-casos-privados.component';
import { FormularioPrivadoComponent } from './formulario-privado/formulario-privado.component';
import { CabecalhoMenuComponent } from './cabecalho-menu/cabecalho-menu.component';
import { EditarCasoPrivadoComponent } from './editar-caso-privado/editar-caso-privado.component';
import { CasoPrivadoDetalhadoComponent } from './caso-privado-detalhado/caso-privado-detalhado.component';
import { ReconhecimentoFacialComponent } from './reconhecimento-facial/reconhecimento-facial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPublicoComponent,
    AreaDeCasosPublicosComponent,
    EditarCasoPublicoComponent,
    AreaDeCasosPrivadosComponent,
    FormularioPrivadoComponent,
    CabecalhoMenuComponent,
    EditarCasoPrivadoComponent,
    CasoPrivadoDetalhadoComponent,
    ReconhecimentoFacialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
      NoopAnimationsModule,
      MatButtonModule,
      MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
