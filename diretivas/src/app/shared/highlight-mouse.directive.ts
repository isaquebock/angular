import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = "";

  @HostListener('mouseenter')
  onMouseOver() {
  }

  @HostListener('mouseover')
  onMouseLeave() {
      this._renderer.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
      )
  }



  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {

  }

}
