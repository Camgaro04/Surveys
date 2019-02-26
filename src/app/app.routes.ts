import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { AsesoresComponent } from './components/asesores/asesores.component';

const APP_ROUTES: Routes = [
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'asesores', component: AsesoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'encuestas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
