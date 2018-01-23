import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import { AgregarUsuarioComponent } from '../component/agregar-usuario/agregar-usuario.component';
import { ListarUsuariosComponent } from '../component/listar-usuarios/listar-usuarios.component';
import { globals } from '../globals'

import {CampoValidacionDirective} from '../directive/campo-validacion.directive'

let rutas:Routes = [
  {
    path:'inicio',component:AgregarUsuarioComponent
  },
  {
    path:'final',component:ListarUsuariosComponent
  }
  ,
  {
    path:'',redirectTo:'/inicio',pathMatch:'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ListarUsuariosComponent,
    CampoValidacionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
