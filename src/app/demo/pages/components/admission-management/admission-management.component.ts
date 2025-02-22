import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-admission-management',
  imports:[NgSelectModule, FormsModule, ReactiveFormsModule, CommonModule,SharedModule,NgxPaginationModule],
  standalone:true,
  templateUrl: './admission-management.component.html',
  styleUrl: './admission-management.component.scss'
})
export class AdmissionManagementComponent implements OnInit {
  lastName:any;firstName:any;gender:any;course:any
  isCollapsed = false; // Controls collapse state
  admissionForm: FormGroup;academicYear:any
  academicYearOptions = [
    { academicYear: '2023-2024' },
    { academicYear: '2024-2025' },
  ];
  
  // Sample dropdown data
  genderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
  ];
  courseOptions = [
    { name: 'Computer Science', id: 1 },
    { name: 'Mathematics', id: 2 },
    { name: 'Physics', id: 3 },
  ];
  semesterOptions = [
    { name: 'Semester 1', id: 1 },
    { name: 'Semester 2', id: 2 },
    { name: 'Semester 3', id: 3 },
  ];

  constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      gender: [''],
      email: [''],
      phone: [''],
      course: [''],
      semester: [''],
      academicYear: [''],
    });
  }
ngOnInit(): void {

}
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onSubmit(val:any) {
    console.log(this.admissionForm.value);
  }

  clearForm() {
    this.admissionForm.reset();
  }

}
