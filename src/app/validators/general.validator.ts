import { FormControl } from '@angular/forms';

export class GeneralValidator {
	selectOption(control: FormControl): {[s: string]: boolean} {
		if(control.value == '0'){
			return { noSelectedOption: true }
		}
		return null;
	}

	justNumbers(key){
		let code: number = key.keyCode;
    return code >= 48 && code <= 57;
	}
}
