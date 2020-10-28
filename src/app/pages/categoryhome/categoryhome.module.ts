import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryhomePageRoutingModule } from './categoryhome-routing.module';

import { CategoryhomePage } from './categoryhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryhomePageRoutingModule
  ],
  declarations: [CategoryhomePage]
})
export class CategoryhomePageModule {}
