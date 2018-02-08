import { Town } from '../../classes/entities/town';

export class PersonalInformation {

	id: number;
	town: Town;
	birthTown: Town;
	name1: string;
	name2: string;
	lastName1: string;
	lastName2: string;
	documentType: string;
	documentNumber: string;
	address: string;
	phoneNumber: string;
	birthDate: string;
	email: string;
	gender: string;

	constructor(
		id: number = null,
		town: Town = new Town(),
		birthTown: Town = new Town(),
		name1: string = '',
		name2: string = '',
		lastName1: string = '',
		lastName2: string = '',
		documentType: string = '0',
		documentNumber: string = '',
		address: string = '',
		phoneNumber: string = '',
		birthDate: string = '01/01/2000',
		email: string = '',
		gender: string = '0'
	){
		this.id = id;
		this.town = new Town(
			town.id,
			town.departament,
			town.name,
			town.state
		);
		this.birthTown = new Town(
			birthTown.id,
			birthTown.departament,
			birthTown.name,
			birthTown.state
		);
		this.name1 = name1;
		this.name2 = name2;
		this.lastName1 = lastName1;
		this.lastName2 = lastName2;
		this.documentType = documentType;
		this.documentNumber = documentNumber;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.birthDate = birthDate;
		this.email = email;
		this.gender = gender;
	}

}
