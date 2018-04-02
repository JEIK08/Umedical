import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { SelectComponent } from './controls/select/select.component';
import { TextComponent } from './controls/text/text.component';
import { NumberComponent } from './controls/number/number.component';
import { DateComponent } from './controls/date/date.component';

@NgModule({
  declarations: [
  	ModalComponent,
  	SelectComponent,
  	TextComponent,
  	NumberComponent,
  	DateComponent
  ],
  imports: [
  	CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent,
    SelectComponent,
    TextComponent,
    NumberComponent,
    DateComponent
  ]
})
export class SharedModule { }
