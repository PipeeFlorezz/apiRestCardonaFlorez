import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { alumno } from 'src/app/models/models';
import { AlumnosService } from '../../Services/alumnos.service';

@Component({
  selector: 'app-cear-alumno',
  templateUrl: './cear-alumno.component.html',
  styleUrls: ['./cear-alumno.component.css']
})
export class CearAlumnoComponent implements OnInit {

  public formAlumno: FormGroup;
  public alumno: alumno;
  public id: any;
  constructor(
    private alumnosSrrvices: AlumnosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formAlumno = this.formBuilder.group({
      email: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });

    this.alumno = {_id: '', email: '', nombre: '', apellido: '', edad:0, pais:'', sexo:'', clave:''}

  }
  ngOnInit(): void {
    
  }

  crearAlumno(){
    console.log(this.formAlumno.value);
    this.alumnosSrrvices.crearAlumno(this.formAlumno.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/alumnos'])
      }
    )
  }

}