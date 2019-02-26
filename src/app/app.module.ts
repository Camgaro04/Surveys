import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { SurveyService } from './services/surveys.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncuestasComponent,
    PreguntasComponent,
    AsesoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
