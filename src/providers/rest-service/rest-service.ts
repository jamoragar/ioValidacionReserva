import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RestServiceProvider {
  apiURL = 'http://localhost:737';
  //apiURL = 'http://ventas.tabsa.cl:737';

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
  postDatosPasajeroReserva(id_reserva){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/datosPasajeroReserva', id_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postReserva(id_reserva){
    return new Promise(resolve => {
      this.http.post(this.apiURL + '/reserva', id_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postCreadorReserva(id_reserva){
    return new Promise(resolve => {
      this.http.post(this.apiURL + '/creadorReserva', id_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postDatosCruce(id_cruce){
    return new Promise(resolve => {
      this.http.post(this.apiURL + '/datosCruce', id_cruce).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postValorReserva(datos_reserva){
        // datos_reserva = {id_reserva: id_reserva, id_cruce: id_cruce, pago_online: false}
    return new Promise(resolve => {
      this.http.post(this.apiURL + '/valorReserva', datos_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postDatosVehiculo(id_reserva){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/datosVehiculoReserva', id_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err)
      });
    });
  }
  postDatosCarga(id_reserva){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/datosCargaReserva', id_reserva).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err)
      });
    });
  }
  getOrigen(){
    return new Promise(resolve =>{
      this.http.get(this.apiURL + '/getOrigenes').subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err)
      });
    });
  }
  postDestino(nombre_tramo){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/getDestinos', nombre_tramo).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  postGetCruces(tramo_fecha){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/getCruces', tramo_fecha).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
        resolve(err);
      });
    });
  }
  getPasajeroData(identificacion_pasajero){
    return new Promise(resolve =>{
      this.http.post(this.apiURL + '/getPasajeroData', identificacion_pasajero).subscribe(data =>{
        resolve(data);
      }, err=>{
        console.log(err);
        resolve(err);
      });
    });
  }
  getPaises(){
    return new Promise(resolve =>{
      this.http.get(this.apiURL + '/getPaises').subscribe(data =>{
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