import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmbarqueManualPage } from './embarque-manual';

@NgModule({
  declarations: [
    EmbarqueManualPage,
  ],
  imports: [
    IonicPageModule.forChild(EmbarqueManualPage),
  ],
})
export class EmbarqueManualPageModule {}
