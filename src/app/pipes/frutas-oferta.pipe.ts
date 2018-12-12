import { Pipe, PipeTransform } from '@angular/core';
import { Fruta } from '../model/fruta';

@Pipe({
  name: 'frutasOferta'
})
export class FrutasOfertaPipe implements PipeTransform {

  frutas: Fruta[];

  transform(value: Fruta[], condicion?: boolean): any {
    
    this.frutas = [];

    if (condicion == undefined) {
      this.frutas = value;
    } else {
      if (value) {
        value.forEach(e => {
          if ( e.oferta == condicion ) {
            this.frutas.push(e);
          }
        });
      }
    }
    return this.frutas;
  }

}
