// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { GestorFrutasComponent } from './components/gestor-frutas/gestor-frutas.component';
import { PaginaDetalleComponent } from './components/pagina-detalle/pagina-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

// Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { LoginService } from './providers/login.service';

// Guards
import { BackofficeGuard } from './guards/backoffice.guard';

// Pipes
import { FrutasOfertaPipe } from './pipes/frutas-oferta.pipe';

// Directives
import { DestacarDirective } from './directives/destacar.directive';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FrutaCardComponent,
    ComparadorComponent,
    GestorFrutasComponent,
    PaginaDetalleComponent,
    LoginComponent,
    FrutasOfertaPipe,
    DestacarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  FrutaService,
  LoginService,
  BackofficeGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
