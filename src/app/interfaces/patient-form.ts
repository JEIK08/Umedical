export interface PatientForm {
	personalData: {
		documentType: string,
		documentNumber: string,
		name1: string,
		name2: string,
		lastName1: string,
		lastName2: string,
		birthDate: string,
		gender: string,
		birthDepartament: number,
		birthTown: number
	},
	contactData: {
		residenceDepartament: number,
		residenceTown: number,
		phoneNumber: string,
		address: string,
		email: string
	},
	others: {
		zone: string,
		patientType: string
	}

}
