import { Component, Input, Output, EventEmitter } from '@angular/core'; /* <======= Siempre revisar que este importando el imput, output y el event emitter */

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  dato!:string
  @Output() guardarDato = new EventEmitter<string>();
guardar(){
  this.guardarDato.emit(this.dato)
}


}
