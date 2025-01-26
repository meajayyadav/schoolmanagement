import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-admission-management',
  imports:[SharedModule,ReactiveFormsModule,FormsModule,NgSelectModule,CommonModule],
  standalone:true,
  templateUrl: './admission-management.component.html',
  styleUrl: './admission-management.component.scss'
})
export class AdmissionManagementComponent {
  admissionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      course: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.admissionForm.valid) {
      console.log('Form Data:', this.admissionForm.value);
    }
  }

  onReset(): void {
    this.admissionForm.reset();
  }
  
}
