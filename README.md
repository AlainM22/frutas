# Frutas

Proyecto de Angular2 para comparar, comprar y gestionar distintos tipos de Frutas.

## Prerequisitos

Instalar [NODE JS](https://nodejs.org/es/)
Arrancar JSON con las frutas ejecutar el siguiente comando en una terminal en la ruta del proyecto:
**json-server --watch db.json**

## Servidor
Arrancar el proyecto desde una terminal en la ruta del proyecto:
**ng serve -o**

## Cliente Angular

Debemos instalar de manera GLOBAL ( usar parametro -g ) el cliente de angular para poder ejecutarlo desde cualquier proyecto. `npm install -g @angular/cli`

## Instalas depencias o librerias

Run `npm install` descarga las librerias necesarias en node_modules.

## Funcionalidades

El proyecto cuenta con un listado publico de frutas desde el que se pueden seleccionar dos de ellas para compararlas y comprar. Un formulario de acceso a la sección de gestión de las frutas, a la que solo se puede acceder una vez estar logeado. Esta sección cuenta con un listado en una tabla de todas las frutas con todos sus datos, tambien se dan las opciones de crear nueva fruta, modificar una existente o eliminarla.

### Menú de la aplicación

El logo de la aplicación conduce al comparador, el botón gestor a la parte de gestión y iniciar sesión para logear.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/menu1.JPG)
En caso de estar logeado aparecera cerrar sesión en lugar de iniciar.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/menu2.JPG)

### Comparador

El comparador contiene un listado de todas las frutas que se pueden filtar en función de si tienen oferta o no, ademas de un buscador para buscar frutas en concreto por su nombre. Se pueden seleccionar dos frutas diferentes para comparar entre si su precio y calorias, tambien se pueden ver todos sus datos. Si clickamos en comprar se añadira esa fruta al carrito, puediendo variar la cantidad y consultar el precio en todo momento.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/comparador.JPG)

### Gestor de frutas

#### Listado del gestor de frutas

Este listado incluye todos los datos de todas las frutas en formato de tabla. Con las opciones de filtrar, buscar, crear nueva fruta, modificar o eliminar una fruta.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/listado.JPG)

#### Formulario para crear frutas nuevas

Este formulario incluye todos los campos necesarios a la hora de crear una fruta nueva. Todos ellos con sus validaciones y mensajes de información.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/formulario.JPG)
Tambien incluye una manera comoda de añadir los colores de una fruta.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/formulario2.JPG)

#### Formulario para modificar frutas existentes

Este formulario se carga con los datos de la fruta seleccionada y permite editarlos todos o individualmente. Todos ellos con sus validaciones y mensajes de información.
![Alt text](https://github.com/AlainM22/frutas/blob/master/screnshoots/formularioEditar.JPG)

## Chiste

Los programas de Chuck Norris siempre compilan a la primera.
