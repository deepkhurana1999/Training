import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input() color: string;
  @HostBinding('style.border') hostBorder: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  changeColor(col: string)
  {
    this.renderer.setStyle(this.element.nativeElement,'color',col);
  }
  @HostListener('click') showmessage()
  {
    alert("The element is clicked");
  }

  @HostListener('mouseenter') changeColorOnEnter()
  {
    this.changeColor(this.color);
    this.hostBorder = '5px dotted green';
  }
  
  @HostListener('mouseleave') changeColorOnExit()
  {
    this.changeColor('black');
    this.hostBorder = "";
  }
  
  
}
