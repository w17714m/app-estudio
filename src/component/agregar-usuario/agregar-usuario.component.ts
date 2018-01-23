import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import {Usuario} from '../../model/Usuario.Model'
import { globals } from '../../globals';
import {} from '../../directive/campo-validacion.directive'

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
  
})
export class AgregarUsuarioComponent implements OnInit {
  private fecha: any = new Date();
  private usuario: Usuario[];
  public user: Usuario;

  public rForm:FormGroup;
  public post: any;
  public descripcion: string;
  public nombre: string;

  constructor(private _globals: globals,private _fb: FormBuilder){ 
     this.user = new Usuario("","",null);
    
     this.rForm = _fb.group({
      'user.nombre':[null,Validators.required],
      'user.apellido':[null,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(100)])],
      'user.cedula':[null,Validators.required]
      }
    );
}

  addPost(post){
    this._globals.listaUsuario.push(new Usuario(
      post.controls["user.nombre"].value,
      post.controls["user.apellido"].value,
      post.controls["user.cedula"].value));
    console.log('Se agrego satisfactoriamente.');
  }

  ngOnInit() {
    
  }

  public agregarUsuario(_nombre: string, _apellido: string ,_cedula:number){
    this._globals.listaUsuario.push(new Usuario(_nombre,_apellido,_cedula));
    
  }


  public onSubmit(f){
    console.log('validacion',f);
    alert('');
  }



}
