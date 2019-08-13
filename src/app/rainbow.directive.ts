import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
allColors = [
  'darkredblue' , 'hotpink' , 'lightskyblue' , 'goldenred' , 'green' , 'red' , 'sunfloweryellow'
];
  constructor() { }

  @HostBinding('style.color')color: string;
  @HostBinding('style.border-color')bordercolor: string;
  @HostListener('keydown') newColor() {
    const mycolor = Math.floor(Math.random() * this.allColors.length);
    this.color = this.bordercolor = this.allColors[mycolor];
  }
}
