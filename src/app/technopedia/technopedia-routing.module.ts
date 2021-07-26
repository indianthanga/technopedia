import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnopediaComponent } from './technopedia.component';

const routes: Routes = [
  {
    path: '',
    component: TechnopediaComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnopediaRoutingModule {}
