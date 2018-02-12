import { Component, OnInit } from '@angular/core';
import { Animation } from '../../classes/animation';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
})

export class ReceptionComponent implements OnInit {

  //1 = Citas, 2 = Pacientes, 3 = Contratos
	private optionSelected: number;

  constructor(private animation: Animation) {
  	this.optionSelected = 2;
  }

  ngOnInit(){
    this.animation.deleteEntry('reception');
  }

  selectOption(opt: number){
    if(opt != this.optionSelected) this.animation.addOutput('content-reception-' + this.optionSelected.toString()).addEventListener('animationend', () => this.optionSelected = opt);    
  }

}

