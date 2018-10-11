import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RestServiceProvider {
  apiURL = 'http://localhost:24500';
  //apiURL = 'http://ventas.tabsa.cl:24500';

  constructor(public http: HttpClient) {    
  }
  postBuscarReserva(criterioBusqueda){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/buscarReserva', criterioBusqueda).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  getUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiURL + '/Users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err);
      });
    });
  }
}   
