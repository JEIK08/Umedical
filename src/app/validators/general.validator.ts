import { FormControl } from '@angular/forms';

export class GeneralValidator {
	
	noSelectedOption(control: FormControl): {[s: string]: boolean} {
		if(control.value == '0'){
			return { noSelectedOption: true }
		}
		return null;
	}

	noSelectedDate(control: FormControl): {[s: string]: boolean} {
		if(control.value == ''){
			return { noSelectedDate: true }
		}
		return null;
	}

	justNumbers(key){
		let code: number = key.keyCode;
    return (code >= 48 && code <= 57) || code == 13;
	}

}
