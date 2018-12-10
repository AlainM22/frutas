import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Fruta } from '../model/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  endPoint: string = "http://localhost:3000/frutas";

  constructor(public http: HttpClient) { 
    console.log('FrutaService constructor');
  }

  getAll(): Observable<any> {
    console.trace('FrutaService getAll');
    return this.http.get(this.endPoint);
  }

  getDetalle(id: number): Observable<any>{
    console.trace('FrutaService getDetalle');
    return this.http.get(this.endPoint + '/' + id);
  }

  add(fruta: Fruta): Observable<any>{
    console.trace('FrutaService add');
    let body = {
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen,
      "cantidad": fruta.cantidad,
      "colores": fruta.colores
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.endPoint, body, httpOptions);
  }

  update(id: number, fruta: Fruta): Observable<any>{
    let uri = this.endPoint + "/" + fruta.id;
    let body = {
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen,
      "cantidad": fruta.cantidad,
      "colores": fruta.colores
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(uri, body, httpOptions);
  }

  delete(id: Number): Observable<any>{
    console.trace('FrutaService delete');
    let uri = this.endPoint + "/" + id;
    return this.http.delete(uri);
  }
}
