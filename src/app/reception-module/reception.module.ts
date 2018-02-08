import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared.module';

import { PatientService } from './services/patient.service';
import { ReceptionComponent } from './reception-component/reception.component';
import { PatientComponent } from './reception-component/patient/patient.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
  	CommonModule,
    SharedModule
  ],
  declarations: [
  	ReceptionComponent,
  	PatientComponent,
  	ModalComponent
  ],
  exports: [ReceptionComponent],
  providers: [PatientService]
})
export class ReceptionModule { }
