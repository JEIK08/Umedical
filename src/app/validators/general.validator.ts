import { FormControl } from '@angular/forms';

export class GeneralValidator {
	noSelectedOption(control: FormControl): {[s: string]: boolean} {
		if(control.value == '0'){
			return { noSelectedOption: true }
		}
		return null;
	}

	justNumbers(key){
		let code: number = key.keyCode;
    return code >= 48 && code <= 57;
	}

	getTooltipsArray(controls: string[]){
		let tooltips: boolean[] = [];
		for(let c of controls){
			tooltips[c] = false;
		}
		return tooltips;
	}

	// submitted(id: string){
	// 	let form: HTMLElement = document.getElementById(id);
	// 	let groups: NodeListOf<Element> = form.getElementsByClassName('form-group');
	// 	let controls: NodeListOf<Element>;
	// 	let control: Element;
	// 	let classes: DOMTokenList;
	// 	for(let g = 0; g < groups.length; g++){
	// 		controls = groups.item(g).getElementsByClassName('form-control');
	// 		console.log(controls);
	// 		for(let c = 0; c < controls.length; c++){
	// 			control = controls.item(c);
	// 			classes = control.classList;
	// 			if(classes.contains('ng-valid')) classes.add('');
	// 			console.log(typeof(controls.item(c)), controls.item(c));
	// 		}
	// 	}
	// }
}
