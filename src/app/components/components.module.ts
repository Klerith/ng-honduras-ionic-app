import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';



@NgModule({
  declarations: [
    TarjetasComponent,
    TarjetaComponent
  ],
  exports: [
    TarjetasComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
