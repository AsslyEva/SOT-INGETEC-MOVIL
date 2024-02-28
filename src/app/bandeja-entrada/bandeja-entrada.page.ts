import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.page.html',
  styleUrls: ['./bandeja-entrada.page.scss'],
})
export class BandejaEntradaPage {
  items: any[] = [];
  imageUrl: string | undefined;

  constructor(private camera: Camera) {}

  agregarItem() {
    const newItem = {
      nombre: 'Nuevo Item',
      descripcion: 'Descripción del nuevo item',
      imagenUrl: this.imageUrl || 'assets/img/default.jpg',
    };
    this.items.push(newItem);
    this.imageUrl = '';
  }
}
