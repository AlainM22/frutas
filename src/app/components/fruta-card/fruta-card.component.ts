import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

   _fruta: Fruta;
   _fruta2?: Fruta; // ? opcional

  @Input('_fruta') set fruta(value: Fruta) {
    if (value) {
      this._fruta = value;
    } else {
      console.debug('fruta undefined => new Fruta()');
      this._fruta = new Fruta();
    }
  }

  get fruta(): Fruta {
    return this._fruta;
  }

  @Input('_fruta2') set fruta2 (value: Fruta) {
    this._fruta2 = value;
  }

  get fruta2(): Fruta {
    return this._fruta2;
  }

  // registrar evento de salida
  @Output() clikCompra = new EventEmitter();

  constructor() {
    console.trace('FrutaCardComponent constructor');
  }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit');
  }

  comprar() {
    console.trace('FrutaCardComponent comprar');

    // Emitimos eventos al componente padre y enviamos parametro 'frutaClick'
    this.clikCompra.emit( { frutaClick : this.fruta } );

  }


}
