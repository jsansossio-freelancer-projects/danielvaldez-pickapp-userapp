import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryhomePage } from './categoryhome.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryhomePageRoutingModule {}
