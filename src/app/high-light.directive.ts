import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

   constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor);
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground();
    }

  setBackground(value: string= null){
    this.elem.nativeElement.style.background=value;
  }

  @Input('appHighLight') highlightColor: string;

}


