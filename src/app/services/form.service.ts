import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FormService {

	submitted: Subject<boolean>

  constructor() {
  	this.submitted = new Subject();
  }

}
