import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared.module';

import { PatientService } from './services/patient.service';
import { GeneralValidator } from '../validators/general.validator';
import { ReceptionComponent } from './reception-component/reception.component';
import { PatientComponent } from './reception-component/patient/patient.component';
import { ModalComponent } from '../components/modal/modal.component';
import { SelectComponent } from '../components/controls/select/select.component';
import { InputNumbersComponent } from '../components/controls/input-numbers/input-numbers.component';

@NgModule({
  imports: [
  	CommonModule,
    SharedModule
  ],
  declarations: [
  	ReceptionComponent,
  	PatientComponent,
  	ModalComponent,
    SelectComponent,
    InputNumbersComponent
  ],
  exports: [ReceptionComponent],
  providers: [GeneralValidator, PatientService]
})
export class ReceptionModule { }
