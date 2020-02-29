import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mostrarCupon = true;

  detalles = [
    {
      desc: 'Sunglass',
      monto: 112
    },
    {
      desc: 'Tax',
      monto: 112 * 0.15
    },
    {
      desc: 'Shipping',
      monto: 10
    },
  ];


  get grandTotal() {

    let total = 0;
    for (const desc of this.detalles) {
      total = total + desc.monto
    }

    return total;
  }


  constructor( private alertController: AlertController ) {}

  async descuento() {

    const alerta = await this.alertController.create({
      header: 'Ingrese un cupón de descuento',
      inputs: [
        {
          name: 'coupon',
          type: 'text',
          placeholder: 'xxx-123'
        },
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Cancel'
        },
        {
          text: 'Apply',
          handler: ( input ) => {
            // console.log(input);
            this.detalles.push({
              desc: input.coupon,
              monto: -50
            });
            this.mostrarCupon = false;
          }
        }
      ]
    });

    alerta.present();

  }

}
