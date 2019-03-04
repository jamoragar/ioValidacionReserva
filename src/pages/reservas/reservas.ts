import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//Páginas
import { TabsReservaPage } from "../tabs-reserva/tabs-reserva";
//Providers
import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
export class ReservasPage {

  reservas:any;
  id_reserva:any;
  creador_reserva:any;
  pasajero_data:any;
  vehiculo_data:any;
  carga_data:any;
  reserva_data:any;
  cruce_data:any;
  valor_reserva:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public restService: RestServiceProvider) {
    this.reservas = this.navParams.data;
  }

  abrirReserva(data){
    this.id_reserva = data;

    this.restService.postDatosPasajeroReserva({id_reserva: this.id_reserva})
      .then(data_pasajero_reserva =>{
        this.pasajero_data = data_pasajero_reserva;
      });
    this.restService.postDatosVehiculo({id_reserva: this.id_reserva})
      .then(data_vehiculo_reserva =>{
        this.vehiculo_data = data_vehiculo_reserva;        
      })
    this.restService.postDatosCarga({id_reserva:this.id_reserva})
      .then(data_carga_reserva =>{
        this.carga_data = data_carga_reserva;
      });

    this.restService.postCreadorReserva({id_reserva: this.id_reserva})
      .then(data_creador_reserva =>{
        this.creador_reserva = data_creador_reserva;
      });

    this.restService.postReserva({id_reserva: this.id_reserva})
      .then(data_reserva =>{
        this.reserva_data = data_reserva;
        this.restService.postDatosCruce({id_cruce: this.reserva_data.id_cruce})
          .then(data_cruce =>{
            let id_tramo = data_cruce[0].id_tramo;
            this.cruce_data = data_cruce;
            this.restService.postValorReserva({id_reserva: this.id_reserva, id_tramo:id_tramo, pago_online: false})
              .then(valor_reserva =>{
                this.valor_reserva = valor_reserva;
              });
          });
      }); 
      
    let loading = this.loadingCtrl.create({
      content: 'Cargando información de la reserva...'
    });

    loading.present();
    setTimeout(() => {

      this.navCtrl.push(TabsReservaPage, {pasajero: this.pasajero_data, reserva: this.reserva_data, cruce: this.cruce_data, valor_reserva: this.valor_reserva, creador_reserva: this.creador_reserva, data_vehiculo: this.vehiculo_data});
    }, 800);
    setTimeout(() => {
      loading.dismiss();
    }, 1200);
  }
}
