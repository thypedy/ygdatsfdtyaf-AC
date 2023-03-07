import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { parse } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1: string='';
  n2: string='';
  n3: string='';
  res1:number=0;
  res:number=0;
  res2:number=0;
  conta:number=0;
  radioSelecionada:string='';

constructor(
  public toastController: ToastController,
  public alertController: AlertController
) {}

somar(){
this.res1= 72.7 * parseFloat(this.n1) - 58;
}

mulher(){
  this.res = 62.1 * parseFloat(this.n2) - 44.7;
  }

  verificarRadio() {
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.radioSelecionada,
      duration: 2000,
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }

  pagar(){
    if(this.radioSelecionada == 'option1'){
      this.conta = parseFloat(this.n3) * 0.1;
      this.res2 = parseFloat(this.n3) - this.conta;
    }
    if(this.radioSelecionada == 'option2'){
      this.res2 = parseFloat(this.n3);
    }
    if(this.radioSelecionada == 'option3'){
      this.conta = parseFloat(this.n3) / 10;
      this.res2 = parseFloat(this.n3) + this.conta;
    }
  }
}

