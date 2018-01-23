import {Injectable} from '@angular/core';
import {Usuario} from './model/Usuario.Model'

@Injectable()
export class globals{
    public listaUsuario:Usuario[]=[];
}