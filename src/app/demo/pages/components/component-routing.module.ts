import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography.component').then((m:any) => m.TypographyComponent),
      },
      {
        path: 'system-code',
        loadComponent: () =>
          import('./system-code/system-code.component').then((m) => m.SystemCodeComponent),
      },
      {
        path: 'addmission',
        loadComponent: () =>
          import('./admission-management/admission-management.component').then((m) => m.AdmissionManagementComponent),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}
