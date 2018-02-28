import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective{
  ultimatedefaultcolor="red";
   constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor || this.defaultcolor || this.ultimatedefaultcolor);
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground();
    }

  setBackground(value: string= null){
    this.elem.nativeElement.style.background=value;
  }

  @Input('appHighLight') highlightColor: string; 
  @Input() defaultcolor : string;
}


