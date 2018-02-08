import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalData } from '../../interfaces/modal-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	@Input('data') data: ModalData;
  @Output('optionSelected') optionSelected: EventEmitter<number>;

  constructor() {
    this.optionSelected = new EventEmitter();
  }

  chosenOption(i: number){
    let content = document.getElementById('jmodal');
    content.classList.add('jmodal-out');
    content.addEventListener('animationend', () => this.optionSelected.emit(i));
  }

}
