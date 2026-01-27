import { Injectable, computed, signal } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
}

@Injectable({ providedIn: 'root' })
export class Servicio {

  readonly productos = signal<Producto[]>([
    {
      id: 1,
      nombre: 'Xbox One',
      precio: 4999,
      img: 'https://cdn.shopify.com/s/files/1/0928/2961/4362/files/1_6.jpg?v=1743174251&width=533'
    },
    {
      id: 2,
      nombre: 'Nintendo Switch 2',
      precio: 7999,
      img: 'https://www.rac.mx/wp-content/uploads/2025/10/nintendo_switch_oled_blanco_-300x300.jpg'
    },
    {
      id: 3,
      nombre: 'Play Station 5',
      precio: 9499,
      img: 'https://cdn.homedepot.com.mx/productos/235508/235508-d.jpg'
    },
    {
      id: 4,
      nombre: 'PC Gamer (RTX)',
      precio: 24999,
      img: 'https://m.media-amazon.com/images/I/71zFRCcWekL._AC_SL1500_.jpg'
    },
    {
      id: 5,
      nombre: 'Monitor 144Hz',
      precio: 3499,
      img: 'https://m.media-amazon.com/images/I/71k0GJpS3CL._AC_SL1500_.jpg'
    },
    {
      id: 6,
      nombre: 'Teclado Mecánico',
      precio: 1299,
      img: 'https://m.media-amazon.com/images/I/61p9+O8d2WL._AC_SL1500_.jpg'
    }
  ]);

  // IDs seleccionados (estado)
  readonly seleccionados = signal<Set<number>>(new Set<number>());

  // Total reactivo (computed)
  readonly total = computed(() => {
    const ids = this.seleccionados();
    return this.productos()
      .filter(p => ids.has(p.id))
      .reduce((acc, p) => acc + p.precio, 0);
  });

  estaSeleccionado(id: number): boolean {
    return this.seleccionados().has(id);
  }

  toggle(id: number): void {
    this.seleccionados.update(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  limpiar(): void {
    this.seleccionados.set(new Set<number>());
  }
}
