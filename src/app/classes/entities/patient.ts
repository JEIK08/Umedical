import { PersonalInformation } from '../../classes/entities/personal-information';

export class Patient {

	id: number;
	personalInformation: PersonalInformation;
	zone: string;
	patientType: string;

	constructor(
		id: number = null,
		personalInformation: PersonalInformation = new PersonalInformation(),
		zone: string = '0',
		patientType: string = '0'
	){
		this.id = id;
		this.personalInformation = new PersonalInformation(
			personalInformation.id,
			personalInformation.town,
			personalInformation.birthTown,
			personalInformation.name1,
			personalInformation.name2,
			personalInformation.lastName1,
			personalInformation.lastName2,
			personalInformation.documentType,
			personalInformation.documentNumber,
			personalInformation.address,
			personalInformation.phoneNumber,
			personalInformation.birthDate,
			personalInformation.email,
			personalInformation.gender
 		);
		this.zone = zone;
		this.patientType = patientType;
	}

}
