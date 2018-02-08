import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Clases
import { Animation } from './classes/animation';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules
import { ReceptionModule } from './reception-module/reception.module';
import { SharedModule } from './shared-module/shared.module';

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
    RouterModule,
    SharedModule
  ],
  providers: [Animation],
  bootstrap: [AppComponent]
})
export class AppModule { }
