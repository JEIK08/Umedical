import { Component, Input, Output, EventEmitter } from '@angular/core';

import { OptionSelect } from '../../../interfaces/option-select';
import { Control } from '../control.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends Control{

  @Input('options') options: OptionSelect[];
  @Input('emit') emit: boolean;

	@Output('optionSelected') optionSelected: EventEmitter<OptionSelect>

  constructor() {
    super();
  	this.optionSelected = new EventEmitter();
  }

  selectOption(option: any){
    if(this.emit) this.optionSelected.emit(option);
  }

}
