import { Departament } from '../../classes/entities/departament';

export class Town {

	id: number;
	departament: Departament;
	name: string;
	state: number;
	
	constructor(
		id: number = 0,
		departament: Departament = new Departament(),
		name: string = '',
		state: number = 1
	){
		this.id = id;
		this.departament = new Departament(
			departament.id,
			departament.name
		);
		this.name = name;
		this.state = state;
	}

}
