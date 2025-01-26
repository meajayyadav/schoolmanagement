import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-system-code',
  imports: [ReactiveFormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './system-code.component.html',
  styleUrl: './system-code.component.scss'
})
export class SystemCodeComponent {

}
