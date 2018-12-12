import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacar]'
})
export class DestacarDirective {

  constructor(private element: ElementRef) { 
    console.trace('DestacarDirective contructor');
  }

  @HostListener('mouseenter')
    publiconMouseEnter(){
      this.element.nativeElement.style.backgroundColor = "#88cc88";
    }
 
    @HostListener('mouseleave')
    publiconMouseLeave(){
      this.element.nativeElement.style.backgroundColor = "";
    }

}
