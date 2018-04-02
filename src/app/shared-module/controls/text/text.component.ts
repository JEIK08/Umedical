import { Component, Input } from '@angular/core';

import { Control } from '../control.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends Control {

  @Input('placeholder') private placeholder: string;

  constructor() {
  	super();
  	this.placeholder = '';
  }

}
