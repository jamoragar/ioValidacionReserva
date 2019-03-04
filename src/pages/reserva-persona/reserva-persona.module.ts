import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaPersonaPage } from './reserva-persona';

@NgModule({
  declarations: [
    ReservaPersonaPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaPersonaPage),
  ],
})
export class ReservaPersonaPageModule {}
