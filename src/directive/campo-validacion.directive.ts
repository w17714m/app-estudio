import { Directive, Input, ElementRef , HostListener, SimpleChanges, OnChanges } from '@angular/core';


@Directive({
  selector: '[appCampoValidacion]'
})
export class CampoValidacionDirective implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('el mouse ingreso',this.tipodato );
  }

  @Input ('dato') tipodato: string;

  constructor(el:ElementRef) { 
    console.log('ELEMENTO',el);
  }

  @HostListener('change') onchange(){
    
  }
  
  @HostListener('mouseLeave') onMouseLeave(){
    console.log('el mouse salio',this.tipodato);
  }

}
