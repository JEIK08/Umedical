import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-control'
})
export class Control implements OnInit {

	@Input('label') private label: string;
	@Input('error') private error: string;
	@Input('control') private control: FormControl;
  @Input('submit') private submit: Subject<boolean>;
	private tooltip: boolean;
  private formSubmitted: boolean;

  constructor(){
  	this.tooltip = false;
  	this.formSubmitted = false;
  }

  ngOnInit(){
    this.submit.subscribe(event => this.formSubmitted = event);
  }

}
