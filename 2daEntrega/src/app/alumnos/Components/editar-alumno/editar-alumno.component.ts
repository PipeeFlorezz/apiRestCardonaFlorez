import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { alumno } from 'src/app/models/models';
import { AlumnosService } from '../../Services/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  public formAlumno: FormGroup;
  public alumno: alumno
  public id: any;
  constructor(
    private matDialogRef: MatDialogRef<EditarAlumnoComponent>,
    private alumnosSrrvices: AlumnosService,
    private formBuilder: FormBuilder,
  ) {
    this.formAlumno = this.formBuilder.group({
      email: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    });
    let result: any = localStorage.getItem('editarAlumno');
    let resultf = JSON.parse(result);
    console.log(resultf);
    this.id = resultf._id;
    this.alumno = resultf;
   }

  ngOnInit(): void {

  }

  editarAlumno(){
    console.log(this.alumno)
    console.log(this.formAlumno.value);
    this.matDialogRef.close(this.formAlumno.value);
  }



}
