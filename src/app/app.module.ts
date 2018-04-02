import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Clases
import { Animation } from './classes/animation';
import { GeneralValidator } from './validators/general.validator';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules
import { ReceptionModule } from './reception-module/reception.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
  	APP_ROUTING,
    BrowserModule,
		ReceptionModule,
  ],
  providers: [
    Animation,
    GeneralValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
