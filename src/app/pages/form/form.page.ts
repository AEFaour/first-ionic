import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  
  public name: string = "Alfred";

  public fruits: Array<string> = ["Pommes", "Fraises", "Oranges"];
 
  public buttonColor: string = "danger";

  public formIsMasked: boolean = false;

  public message: any = "";
  
  constructor() { 

  }
  
  showHideForm(){
    this.formIsMasked = ! this.formIsMasked;
  }
  sayHello(){
    return "Hello";
  }
  
  ngOnInit() {
  }

}
