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
      {
        path: 'contents',
        loadChildren: () =>
          import('./contents/contents.module').then((m) => m.ContentsModule),
      },
      {
        path: 'credits',
        loadChildren: () =>
          import('./credits/credits.module').then((m) => m.CreditsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnopediaRoutingModule {}
