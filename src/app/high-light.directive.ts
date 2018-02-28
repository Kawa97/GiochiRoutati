import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{

  ngOnInit(): void {
    this.elem.nativeElement.style.background=this.highlightColor;
  }
   constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor);
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground();
    }

  setBackground(value: string= this.defaultcolor){
    this.elem.nativeElement.style.background=value;
  }

  @Input('appHighLight') highlightColor: string; 
  @Input() defaultcolor : string;
}


