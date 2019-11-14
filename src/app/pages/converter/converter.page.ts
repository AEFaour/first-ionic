import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {
  
  inputAmount: number = 0; 
  outputAmount: number = 0;
  changeRate: number = .85;
  inputAmount1: number = 0; 
  outputAmount1: number = 0;
  changeRate1: number = 0.03280841666667;
  changeRate11: number = 0.39370100000003999119;
  inputAmount2: number = 0; 
  outputAmount2: number = 0;
  changeRate2: number = 2.54;
  inputAmount22: number = 0; 
  outputAmount22: number = 0;
  changeRate22: number = 30.48;
  
  sizeInCentimeters: number = 0;
  footSizeInCm: number = 30.48; 
  inchSizeInCm: number = 2.54; 
  numberOfFeet: number = 0;
  numberOfInches: number = 0;  
  
  constructor() { }

  ngOnInit() {
  }
  centimetersToImperial(){
    this.numberOfFeet = Math.floor(this.sizeInCentimeters / this.footSizeInCm);
    let remains = this.sizeInCentimeters % this.footSizeInCm;
    this.numberOfInches = Math.floor(remains / this.inchSizeInCm);
  }

}
