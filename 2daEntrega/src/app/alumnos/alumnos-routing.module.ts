import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './Components/alumnos/alumnos.component';
import { CearAlumnoComponent } from './Components/cear-alumno/cear-alumno.component';

const routes: Routes = [
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'crearAlumno', component: CearAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
