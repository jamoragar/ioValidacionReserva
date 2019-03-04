import {Component} from "@angular/core";
import {NavController, ToastController} from "ionic-angular";
//Páginas
import {ReservasPage} from "../reservas/reservas";
//Providers
import { RestServiceProvider } from '../../providers/rest-service/rest-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  reserva: any;
  criterioBusqueda = {};
  constructor(public nav: NavController, public restService: RestServiceProvider, private toast: ToastController) {
  }

  search(id_reserva, identificacion, nombre, apellido, patente){
    var _id_reserva:number = id_reserva;
    var _identificacion:string = identificacion;
    if(identificacion) _identificacion = _identificacion.trim();
    var _nombre:string = nombre;
    if(nombre) _nombre = _nombre.trim();
    var _apellido:string = apellido;
    if(apellido) _apellido = _apellido.trim();
    var _patente:string = patente;
    if(patente) _patente = _patente.trim();

    this.criterioBusqueda = { id_reserva: _id_reserva, identificacion: _identificacion, nombre: _nombre, apellido: _apellido, patente: _patente }
    if (JSON.stringify(this.criterioBusqueda) == '{}'){
      this.presentToast(1);
    } 
    else{
      this.restService.postBuscarReserva(this.criterioBusqueda)
      .then(data => {
        this.reserva = data;
        if(this.reserva.length != 0){
          this.nav.push(ReservasPage, this.reserva); 
        }
        else
          this.presentToast(2);
        });
      }
  }
  limpiarBusqueda(){
    this.nav.setRoot(HomePage);
  }
  presentToast(tipo:number) {
    let mensaje:string;
    if(tipo == 1){
      mensaje = "Debe especificar al menos un criterio de busqueda en el formulario.";
    }
    else{
      mensaje = "NO SE HAN ENCONTRADO RESERVAS. Intente con otro criterio de busqueda en el formulario."
    }
    let toast = this.toast.create({
      message: mensaje,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

}