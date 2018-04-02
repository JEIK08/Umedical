import { NgModule } from '@angular/core';

import { SharedModule } from '../shared-module/shared.module';

import { PatientService } from './services/patient.service';
import { ReceptionComponent } from './reception-component/reception.component';
import { PatientComponent } from './reception-component/patient/patient.component';
import { AppointmentComponent } from './reception-component/appointment/appointment.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
  	ReceptionComponent,
  	PatientComponent,
  	AppointmentComponent
  ],
  providers: [PatientService]
})
export class ReceptionModule { }
