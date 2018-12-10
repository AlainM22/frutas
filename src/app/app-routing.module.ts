import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes propios
import { ComparadorComponent } from './components/comparador/comparador.component';
import { GestorFrutasComponent } from './components/gestor-frutas/gestor-frutas.component';
import { PaginaDetalleComponent } from './components/pagina-detalle/pagina-detalle.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

// Guards
import { BackofficeGuard } from './guards/backoffice.guard';

const routes: Routes = [
    { path: 'comparador', component: ComparadorComponent},
    { path: 'gestor-frutas', component: GestorFrutasComponent},
    { path: 'login', component: LoginComponent},
    { path: 'pagina-detalle/:id', component: PaginaDetalleComponent},
    { path: 'privado', component: BackofficeComponent, canActivate: [BackofficeGuard]},
    { path: '',  redirectTo: '/home',  pathMatch: 'full'},
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
