import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { Departament } from '../../classes/entities/departament';
import { Town } from '../../classes/entities/town';
import { Patient } from '../../classes/entities/patient';
import { PatientForm } from '../../interfaces/patient-form';

@Injectable()
export class PatientService {

	private urlApi: string;
	private patient: Patient;
	private departaments: Departament[];
	private towns: Town[];

  constructor(private http: HttpClient) {
  	this.urlApi = 'https://umedicalapi.herokuapp.com';
  	this.departaments = [];
  	this.towns = [];
    this.getDepartaments();
    this.getTowns();
  }

  getDepartaments(){
  	this.http.get<Departament[]>(`${ this.urlApi }/departaments`).subscribe(data => this.departaments = data);
  }

  getTowns(){
  	this.http.get<Town[]>(`${ this.urlApi }/towns`).subscribe(data => this.towns = data);
  }

  createPatient(){
  	this.patient = new Patient();
  }

  searchPatient(documentType: string, documentNumber: string){
  	return this.http.get<Patient>(`${ this.urlApi }/patients/${ documentType }/${ documentNumber }`);
  }

  setPatient(patient: Patient){
  	this.patient = new Patient(
  		patient.id,
  		patient.personalInformation,
  		patient.zone,
  		patient.patientType
  	);
  	// console.log(this.patient);
  }

  setPatientData(form: FormGroup){
  	let birthDate: string = form.get('personalData.birthDate').value;
  	this.patient.personalInformation.town.id = form.get('contactData.residenceTown').value;
  	this.patient.personalInformation.birthTown.id =	form.get('personalData.birthTown').value;
  	this.patient.personalInformation.name1 = form.get('personalData.name1').value;
  	this.patient.personalInformation.name2 = form.get('personalData.name2').value;
  	this.patient.personalInformation.lastName1 = form.get('personalData.lastName1').value;
  	this.patient.personalInformation.lastName2 = form.get('personalData.lastName2').value;
  	this.patient.personalInformation.documentType = form.get('personalData.documentType').value;
  	this.patient.personalInformation.documentNumber = form.get('personalData.documentNumber').value;
  	this.patient.personalInformation.address = form.get('contactData.address').value;
  	this.patient.personalInformation.phoneNumber = form.get('contactData.phoneNumber').value;
  	this.patient.personalInformation.birthDate = `${ birthDate.substring(8,10) }/${ birthDate.substring(5,7) }/${ birthDate.substring(0,4) }`;
  	this.patient.personalInformation.email = form.get('contactData.email').value;
  	this.patient.personalInformation.gender = form.get('personalData.gender').value;
  	this.patient.zone = form.get('others.zone').value;
  	this.patient.patientType = form.get('others.patientType').value;
  }

  deletePatient(){
  	this.patient = null;
  }

  getTownsOf(departamentId: number){
    let townsOf: Town[] = [];
    for(let t of this.towns){
      if(t.departament.id == departamentId) townsOf.push(t);
    }
    return townsOf;
  }

  getPatientFormJson(){
  	let pi = this.patient.personalInformation;
  	let birthDate: string = pi.birthDate;
    let patientForm: PatientForm = {
      personalData: {
        documentType: pi.documentType,
        documentNumber: pi.documentNumber,
        name1: pi.name1,
        name2: pi.name2,
        lastName1: pi.lastName1,
        lastName2: pi.lastName2,
        birthDate: `${ birthDate.substring(6, 10) }-${ birthDate.substring(3, 5) }-${ birthDate.substring(0, 2) }`,
        gender: pi.gender,
        birthDepartament: pi.birthTown.departament.id,
        birthTown: pi.birthTown.id,
      },
      contactData: {
      	residenceDepartament: pi.town.departament.id,
      	residenceTown: pi.town.id,
      	phoneNumber: pi.phoneNumber,
      	address: pi.address,
      	email: pi.email,
      },
      others: {
      	zone: this.patient.zone,
      	patientType: this.patient.patientType
      }
    };
    // console.log(patientForm);
  	return patientForm;
  }

  postPatient(){
  	return this.http.post(`${ this.urlApi }/patients`, this.patient);
  }

  putPatient(){
  	return this.http.put(`${ this.urlApi }/patients/${ this.patient.id }`, this.patient);
  }

}

