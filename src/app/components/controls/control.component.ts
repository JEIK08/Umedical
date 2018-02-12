import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormService } from '../../services/form.service';

@Component({
	selector: 'app-control'
})
export class Control {

	@Input('label') label: string;
	@Input('error') error: string;
	@Input('control') control: FormControl;
	tooltip: boolean;
  formSubmitted: boolean;
  formService: FormService;

  constructor(){
  	this.tooltip = false;
  	this.formSubmitted = false;
  }

  submitSubscribe(){
    this.formService.submitted.subscribe(event => this.formSubmitted = event);
  }

}
