import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';


@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Fruta[];
  f1: Fruta;
  f2: Fruta;
  frutaRecibida: Fruta;
  precioTotal: number;
  cantidad: number;
  carrito: Fruta[];

  txtBusqueda: string;
  frutasBusqueda: Fruta[];
  filtro: boolean;

  constructor(public frutaService: FrutaService) {
    console.trace('ComparadorComponent constructor');
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();

    this.precioTotal = 27.58;
    this.cantidad = 3;
    this.carrito = [];

    this.txtBusqueda = "";
    this.frutasBusqueda = [];
    this.filtro = undefined;

  }

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');
    this.listarFrutas();
  }

  listarFrutas(){
    this.frutaService.getAll().subscribe(data =>{
      this.frutas = data.map(el => el);
      this.f1 =  this.frutas[0];
      this.f2 =  this.frutas[1];
    })
  }

  seleccionar( fruta: Fruta ) {
    console.trace('ComparadorComponent seleccionar %o', fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  getTotal(): number{
    let total = 0;
    this.carrito.forEach( el => {
      total += el.precio * el.cantidad;
    })
    return total;
  }

  sumarProducto(p: Fruta, index: number){    
    p.cantidad++;
    if (p.oferta) {
      const descuento = this.frutaRecibida.precio - this.frutaRecibida.precio * this.frutaRecibida.descuento / 100;
      this.precioTotal += descuento;
    } else {
      this.precioTotal += p.precio;
    }
    this.carrito[index] = p;
  }

  restarProducto(p: Fruta, index: number){
    p.cantidad -= 1;
    if (p.cantidad < 1) {
      p.cantidad = 1;
    } else {
      if (p.oferta) {
        const descuento =  this.frutaRecibida.precio - this.frutaRecibida.precio * this.frutaRecibida.descuento / 100;
        this.precioTotal -=  descuento;
      } else {
        this.precioTotal -= p.precio;
      }
    }
  }

  eliminarProducto(p: Fruta, index: number){
    p.cantidad = 1;
    if (p.oferta) {
      const descuento = this.frutaRecibida.precio - this.frutaRecibida.precio * this.frutaRecibida.descuento / 100;
      this.precioTotal = this.precioTotal - (descuento * p.cantidad);
    } else {
      this.precioTotal = this.precioTotal - (p.precio * p.cantidad);
    }
    p.cantidad = 1;
    let pos: number;
    pos = this.carrito.indexOf(p);
    this.carrito.splice(pos , 1);
  }

  actualizarCarro( event: Event) {
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo');
    this.frutaRecibida = event['frutaClick'];

    if (this.frutaRecibida.oferta) {
      this.precioTotal += this.frutaRecibida.precio - (this.frutaRecibida.precio * this.frutaRecibida.descuento) / 100;
    } else {
      this.precioTotal += this.frutaRecibida.precio;
    }

    let f: Fruta;
    f = this.carrito.find(el => el.nombre === this.frutaRecibida.nombre);
    if (f !== undefined) {
      const i = this.carrito.indexOf(f);
      f.cantidad = f.cantidad + 1;
      this.carrito[i] = f;
    } else {
      this.carrito.push(this.frutaRecibida);
    }
  }

  buscar(): void {
    this.frutasBusqueda = [];
    if (this.txtBusqueda == "") {
      this.listarFrutas();
    } else {
      this.frutas.forEach(e => {
        if (e.nombre.toLowerCase().includes( this.txtBusqueda.toLowerCase() )) {
          this.frutasBusqueda.push(e);
        }
      });
      this.frutas = this.frutasBusqueda;

    }
    
    console.log(this.frutasBusqueda.length);
  }

  seleccionarFrutas(): void {
    let coincidencias;
    if (this.filtro == true || this.filtro == false) {
      coincidencias = this.frutas.filter((e) => e.oferta == this.filtro);
      console.log('Seleccionar Frutas, Coincidencias %o para filtro = ' + this.filtro, coincidencias);
      if ( coincidencias.length > 1 ) {
        this.f1 = coincidencias[0];
        this.f2 = coincidencias[1];
      } 
    }
  }

}
