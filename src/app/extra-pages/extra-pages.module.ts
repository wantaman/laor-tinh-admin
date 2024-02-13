import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { BlankComponent } from './blank/blank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ExtraPagesModule {}
