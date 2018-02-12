import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PatientService } from '../../services/patient.service';
import { Animation } from '../../../classes/animation';
import { ModalData } from '../../../interfaces/modal-data';
import { Town } from '../../../classes/entities/town';
import { GeneralValidator } from '../../../validators/general.validator';

import { SelectComponent } from '../../../components/controls/select/select.component';
import { InputNumbersComponent } from '../../../components/controls/input-numbers/input-numbers.component';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [ FormService ]
})
export class PatientComponent implements OnInit, AfterViewInit {

  @ViewChild('documentForm_documentType') private documentForm_documentType: SelectComponent;
  @ViewChild('documentForm_documentNumber') private documentForm_documentNumber: InputNumbersComponent;

	private documentForm: FormGroup;
	private patientForm: FormGroup;

	private shownGroup: boolean[];
	private search: boolean;
	private new: boolean;
	private residenceTowns: Town[];
  private birthTowns: Town[];
  private tooltips: boolean[];
  private documentFormSubmitted: boolean;
  private patientFormSubmitted: boolean;

	private modalPatientSearch: ModalData;
	private modalPatientNew: ModalData;
	private modalCancel: ModalData;
	private modalSave: ModalData;

  constructor(private animation: Animation, private patientService: PatientService, private generalValidator: GeneralValidator, private documentFormService: FormService){
    this.shownGroup = [true, true, true];
    this.search = false;
    this.new = false;
    this.documentFormSubmitted = false;
    this.patientFormSubmitted = false;
    this.documentForm = new FormGroup({
      documentType: new FormControl('0', this.generalValidator.noSelectedOption),
      documentNumber: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    this.patientForm = new FormGroup({
      personalData: new FormGroup({
        documentType: new FormControl(),
        documentNumber: new FormControl(),
        name1: new FormControl(),
        name2: new FormControl(),
        lastName1: new FormControl(),
        lastName2: new FormControl(),
        birthDate: new FormControl(),
        gender: new FormControl(),
        birthDepartament: new FormControl(),
        birthTown: new FormControl()
      }),
      contactData: new FormGroup({
        residenceDepartament: new FormControl(),
        residenceTown: new FormControl(),
        phoneNumber: new FormControl(),
        address: new FormControl(),
        email: new FormControl()
      }),
      others: new FormGroup({
        zone: new FormControl(),
        patientType: new FormControl()
      })
    });
    this.createTooltips();
  }

  ngOnInit(){
    this.animation.deleteEntry('content-reception-2');
  }

  ngAfterViewInit(){
    this.orderSubscribe(this.documentForm_documentType, this.documentFormService);
    this.orderSubscribe(this.documentForm_documentNumber, this.documentFormService);
  }

  orderSubscribe(control: any, service: any){
    control.formService = service;
    control.submitSubscribe();
  }

  createTooltips(){
    this.tooltips = this.generalValidator.getTooltipsArray([
      '.documentForm.documentType',
      '.documentForm.documentNumber',
      '.patientForm.personalData.documentType',
      '.patientForm.personalData.documentNumber',
      '.patientForm.personalData.name1',
      '.patientForm.personalData.name2',
      '.patientForm.personalData.lastName1',
      '.patientForm.personalData.lastName2',
      '.patientForm.personalData.birthDate',
      '.patientForm.personalData.gender',
      '.patientForm.personalData.birthDepartament',
      '.patientForm.personalData.birthTown',
      '.patientForm.contactData.residenceDepartament',
      '.patientForm.contactData.residenceTown',
      '.patientForm.contactData.phoneNumber',
      '.patientForm.contactData.address',
      '.patientForm.contactData.email',
      '.patientForm.others.zone',
      '.patientForm.others.patientType'
    ]);
  }

  showTooltip(show: boolean, ...route: string[]){
    let control: string = '';
    for(let c of route){
      control += '.'+c;
    }
    this.tooltips[control] = show;
  }

  updateTowns(departamentId: number, birth: boolean){
    if(birth){
      this.patientForm.get('personalData.birthTown').setValue('0');
      this.birthTowns = this.patientService.getTownsOf(departamentId);
    }else{
      this.patientForm.get('contactData.residenceTown').setValue('0');
      this.residenceTowns = this.patientService.getTownsOf(departamentId);
    } 
  }

  disableForm(readOnly: boolean){
    if(readOnly) this.patientForm.disable();
    else this.patientForm.enable();
  }

  newPatientQuestion(){
    if(this.search && !this.patientForm.pristine){
    	this.modalPatientNew = {
      	title: 'Editando Paciente',
      	content: 'Si crea un nuevo paciente, los datos editados no se guardarán.\n¿Desea registrar un nuevo paciente?',
      	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
      };
    }else if(this.new && !this.patientForm.pristine){
    	this.modalPatientNew = {
      	title: 'Creando Paciente',
      	content: 'Si crea un nuevo paciente, los datos ingresados no se guardarán.\n¿Desea registrar un nuevo paciente?',
      	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
      };
    }else{
      this.newPatient(1);
    }
  }

  newPatient(optionSelected: number){
    if(optionSelected == 1){
      this.search = false;
      this.new = true;
      this.patientService.createPatient();
      this.patientForm.reset(this.patientService.getPatientFormJson());
      this.disableForm(false);
    }
    this.modalPatientNew = null;
  }

  searchPatientQuestion(){
    this.documentFormService.submitted.next(true);
    this.documentFormSubmitted = true;
    if(this.documentForm.valid){
      if(this.search && !this.patientForm.pristine){
        this.modalPatientSearch = {
        	title: 'Editando Paciente',
        	content: 'Si intenta buscar un paciente registrado, los datos editados no se guardarán.\n¿Desea buscar un paciente registrado?',
        	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
        };
      }else if(this.new && !this.patientForm.pristine){
      	this.modalPatientSearch = {
        	title: 'Creando Paciente',
        	content: 'Si intenta buscar un paciente registrado, los datos ingresados no se guardarán.\n¿Desea buscar un paciente registrado?',
        	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
        };
      }else{
        this.searchPatient(1);
      }
    }
  }

  searchPatient(optionSelected: number){
    if(optionSelected == 1){
      this.patientService.searchPatient(this.documentForm.get('documentType').value, this.documentForm.get('documentNumber').value).subscribe(patient => {
        console.log(patient);
        if(patient != null){
          this.patientService.setPatient(patient);
          this.updateTowns(patient.personalInformation.birthTown.departament.id, true);
          this.updateTowns(patient.personalInformation.town.departament.id, false);
          this.patientForm.reset(this.patientService.getPatientFormJson());
          this.disableForm(true);
        } else {
          this.patientService.deletePatient();
        }
        this.search = true;
        this.new = false;
      });
    }
    this.modalPatientSearch = null;
  }

  cancelQuestion(){
    if(!this.patientForm.pristine){
      this.modalCancel = {
      	title: 'Cancelar',
      	content: '¿Está seguro(a) que desea cancelar?',
      	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
      };
    }else{
      this.cancel(1);
    }
  }

  cancel(optionSelected: number){
    if(optionSelected == 1){
      this.patientService.deletePatient();
      this.new = false;
      this.search = false;
    }
    this.modalCancel = null;
  }

  saveQuestion(){
    this.patientFormSubmitted = true;
    if(this.patientForm.valid){
      if(!this.patientForm.pristine){
        this.modalSave = {
	      	title: 'Guardar',
	      	content: '¿Está seguro(a) que desea guardar los datos?',
	      	options: [{ text: 'NO', info: false }, { text: 'SI', info: true }]
	      };
      }else{
        this.modalSave = {
	      	title: 'Guardar',
	      	content: 'No se han ingresado o modificado datos',
	      	options: [{ text: 'Aceptar', info: true }]
	      };
      }
    }
  }

  save(optionSelected: number){
    if(optionSelected == 1){
      this.patientService.setPatientData(this.patientForm);
      if(this.new){
      	this.patientService.postPatient().subscribe(res => console.log(res));
      }
      if(this.search){
      	this.patientService.putPatient().subscribe(res => console.log(res));
      }
      this.new = false;
      this.search = false;
      this.patientService.deletePatient();
    }
    this.modalSave = null;
  }

}