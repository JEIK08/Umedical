import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation } from '../../classes/animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private animation: Animation) {}

  ngOnInit(){
  	this.animation.deleteEntry('login');
  }

  logIn(){
    this.animation.addOutput('login').addEventListener('animationend', () => this.router.navigate(['/recepcion']));
  }

}
