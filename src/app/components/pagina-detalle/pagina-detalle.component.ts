import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
//import { runInThisContext } from 'vdm';

@Component({
  selector: 'app-pagina-detalle',
  templateUrl: './pagina-detalle.component.html',
  styleUrls: ['./pagina-detalle.component.scss']
})
export class PaginaDetalleComponent implements OnInit {

  id: number;
  fruta: Fruta;

  formulario: FormGroup; //formulario para agrupar inputs == FormControl
  colores: FormArray; //Arrays de FormControl
  mensajeInfo: string;

  constructor(private route: ActivatedRoute, public frutaService: FrutaService) {
    console.trace('PaginaDetalleComponent constructor');
    this.id = 0;

    // agrupacion de controles == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(
        '', //valor inicial
        [ //validaciones
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ),
      precio: new FormControl(
        '0.1', //valor inicial
        [ //validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(999)
        ]
      ),
      calorias: new FormControl(
        "25", //valor inicial
        [//validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(600)
        ]
        ),
        oferta: new FormControl(false),
        descuento: new FormControl(
          "5", //valor inicial
          [//validaciones
            Validators.min(5),
            Validators.max(90)
          ]
        ),
        imagen: new FormControl(
          "https://www.dehesaelmilagro.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/limon-eco.jpg",//valor inicial
          [//validaciones
            Validators.required,
            Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')
          ]
        ),
        colores: new FormArray([this.crearColorFormGroup('')], Validators.minLength(1))
    });

    this.colores = this.formulario.get('colores') as FormArray;
  }

  ngOnInit() {
    console.trace('PaginaDetalleComponent ngOnInit');

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
      if(this.id != -1){
        this.conseguirDetalle(this.id);
      }
   });
  }

  conseguirDetalle(id: number){
    this.frutaService.getDetalle(id).subscribe(data =>{
      console.debug('data %o', data);
      this.fruta = data;
      this.cargarFormulario(this.fruta);
    })
  }

  cargarFormulario(fruta: Fruta){
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(fruta.nombre);
    this.formulario.controls.precio.setValue(fruta.precio);
    this.formulario.controls.calorias.setValue(fruta.calorias);
    this.formulario.controls.oferta.setValue(fruta.oferta);
    this.formulario.controls.descuento.setValue(fruta.descuento);
    this.formulario.controls.imagen.setValue(fruta.imagen);

    const arrayColores = new FormArray([]) as FormArray;

    this.fruta.colores.forEach(c => {
      arrayColores.push(this.crearColorFormGroup(c));
    });

    this.formulario.setControl('colores' , arrayColores);
  }

  crearColorFormGroup(nombre: string): FormGroup{
    return new FormGroup({
      color: new FormControl(
        nombre,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ])
    });
  }

  nuevoColor(nombre: string){
    console.trace('FormularioComponent nuevoColor');
    let aColores = this.formulario.get('colores') as FormArray;
    aColores.push(this.crearColorFormGroup(nombre));
  }

  eliminarColor(index: number){
    console.trace('FormularioComponent eliminarColor');
    let arrayColores = this.formulario.get('colores') as FormArray;
    if(arrayColores.length > 1){
      arrayColores.removeAt(index);
    }
  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);
    if(this.id == -1){
      this.crear();
    }else{
      this.modificar();
    }
  }

  crear(){
    console.log('PaginaDetalleComponent crear')
    let fruta =  new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    
    //Aplicamos el descuento si la oferta esta activa, si no se manda un 0
    if(this.formulario.controls.oferta.value){
      fruta.descuento = this.formulario.controls.descuento.value;
    }else{
      fruta.descuento = 0;
    }
    
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.cantidad = 0;
   
    const arrayColores = this.formulario.get('colores') as FormArray;

    arrayColores.controls.forEach(color => {
      const colorFormControl = color.value.color;
      fruta.colores.push(colorFormControl);
      console.trace('formControlColor', color);
    });

    this.frutaService.add(fruta).subscribe(data =>{
      console.debug(data);
      this.mensajeInfo = "Fruta guardada correctamente";
    });
  }

  modificar(){
    console.log('PaginaDetalleComponent modificar')
    this.frutaService.update(this.id, this.fruta).subscribe(data =>{
      console.debug('data %o', data);
    });
  }

}
