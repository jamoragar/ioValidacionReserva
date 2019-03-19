import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
//Providers
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
//Moment.js for dates
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-embarque-manual',
  templateUrl: 'embarque-manual.html',
})
export class EmbarqueManualPage {
  
  @ViewChild('myForm') formValues;
  form:any = {};

  origen:any;
  destino:any;
  pais:any;
  cruces:any;
  pasajero:any;
  origenes:any[] = [];
  destinos:any [] = [];
  paises:any [] = [];
  month_names:any = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServiceProvider,
              private alertCtrl: AlertController, public toastController: ToastController) {
    this.restService.getOrigen().then(data_origen =>{
      this.origen = data_origen;
      this.origen.forEach((value, i) => {
        let splitted:any[] = [];
        splitted[i] = value.nombre_tramo.split("->");
        this.origenes[i] = splitted[i][0];
      });
      this.origenes = this.origenes.filter((el,i,a) => i === a.indexOf(el));
    });
    this.restService.getPaises().then(data_paises =>{
      this.pais = data_paises
      this.pais.forEach((element, i) => {
        this.paises[i] = element;
      });
    })
    this.form.Nacionalidad = 0;
    console.log('Today is: ' + moment().format('YYYY-MM-DD'));
  }

  embarcarPasajero(){
  }

  getDestino(data){
    this.destinos = [];
    this.cruces = []
    this.restService.postDestino({nombre_tramo: data}).then(data_destino =>{
      this.destino = data_destino;
      this.destino.forEach((value, i) => {
        let splitted:any[] = [];
        splitted[i] = value.nombre_tramo.split("->");
        this.destinos[i] = {id_tramo: value.id_tramo, nombre_tramo: splitted[i][1]}
      });
    });
  }

  getDataPasajero(nacionalidad, rut_pasaporte){
    if(!rut_pasaporte || rut_pasaporte.length < 9 || rut_pasaporte.trim() == "" || nacionalidad == 0){
      this.presentToast();
    }
    else{
      let tipo_documento;
      if(nacionalidad == 152)
      tipo_documento = 1;
      if(nacionalidad != 152 && nacionalidad != 0)
      tipo_documento = 2;
      
  
      this.restService.getPasajeroData({tipo_identificacion:tipo_documento, num_identificacion: rut_pasaporte.trim()}).then(data_pasajero =>{      
        if(data_pasajero != ""){
          this.pasajero = data_pasajero[0];
          this.form.Nombre = this.pasajero.nombre;
          this.form.Apellido = this.pasajero.apellido;
          this.form.Genero = this.pasajero.sexo;
          this.form.Fecha_nacimiento = moment(this.pasajero.fecha_nacimiento.split("T")[0]).format('YYYY-MM-DD');
  
        }
        else{
          this.pasajero = "";
          console.log(this.pasajero)
        }
      })
    }
    
  }

  funcion(id_tramo){
    this.cruces = [];
    let fecha_inicial = moment().subtract(7,'d').format('YYYY-MM-DD');
    let fecha_final = moment().format('YYYY-MM-DD');
    this.restService.postGetCruces({fecha_inicial:fecha_inicial, fecha_final:fecha_final, id_tramo: id_tramo}).then(data_cruces =>{
      this.cruces = data_cruces;
    });
  }

  embarcarPax(){
    console.log(this.form.Rut_pasaporte)
    this.formValues.resetForm();
    if(this.pasajero == ""){
      this.paxNoEncontrado(true);
    } 
  }
  paxNoEncontrado(activar:boolean){
    if(activar == true){
      let alert = this.alertCtrl.create({
        title: 'Información de contacto',
        inputs: [
          {
            name: 'email',
            placeholder: 'E-mail',
            type: 'email'
          },
          {
            name: 'telefono',
            placeholder: 'Teléfono',
            type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
            }
          },
          {
            text: 'OK'
          }
        ]
      });
      alert.present();
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe completar todos los campos para poder continuar...',
      duration: 2666
    });
    toast.present();
  }
    

}
