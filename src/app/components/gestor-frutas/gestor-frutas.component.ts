import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { LoginService } from 'src/app/providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestor-frutas',
  templateUrl: './gestor-frutas.component.html',
  styleUrls: ['./gestor-frutas.component.scss']
})
export class GestorFrutasComponent implements OnInit {

  frutas: Fruta[];

  constructor(public frutaService: FrutaService, private loginService: LoginService, private router: Router) { 
    console.trace('GestorFrutasComponent constructor');
  }

  ngOnInit() {
    console.trace('GestorFrutasComponent ngOnInit');
    this.recargarLista();
  }

  recargarLista(){
    console.trace('GestorFrutasComponent recargarLista');
    this.frutaService.getAll().subscribe(data =>{
      this.frutas = data.map(el => el);
    })
  }

  eliminar(id:number){
    console.trace('GestorFrutasComponent eliminar');
    this.frutaService.delete(id).subscribe(data =>{
      console.debug('data %o', data);
      this.recargarLista();
    })
  }

  logout(){
    console.trace('AppComponent logout');
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
