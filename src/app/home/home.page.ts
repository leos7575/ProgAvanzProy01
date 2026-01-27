import { Component, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonList, IonItem, IonButton, IonThumbnail, IonIcon, IonLabel
} from '@ionic/angular/standalone';
import { Servicio } from '../services/servicio'; // ajusta ruta

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonList, IonItem, IonButton, IonThumbnail, IonIcon, IonLabel
  ],
})
export class HomePage {
  readonly wishlist = inject(Servicio);

  toggle(id: number): void {
    this.wishlist.toggle(id);
  }

  seleccionado(id: number): boolean {
    return this.wishlist.estaSeleccionado(id);
  }
}
