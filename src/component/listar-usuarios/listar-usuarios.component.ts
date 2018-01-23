import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  constructor(private _http:HttpClient) { 

  }
  ngOnInit() {
    this.mostrarUsuario();
  }

  public mostrarUsuario(){
    //
    // this._http.post('https://jsonplaceholder.typicode.com/posts',null).subscribe(
    //   data=>{console.log('DataRecibida',data);},
    //   error=>{console.log('ERROR',error);}
    // );

    // this._http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
    //   console.log(data);
    // });


    this._http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 2
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    
  }
}
