import { PowerComponent } from './power.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRoutingModule } from './power-routing.module';
import { PowerCreateComponent } from './power-create/power-create.component';
import { PowerTableComponent } from './power-table/power-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PowerComponent,
    PowerCreateComponent,
    PowerTableComponent
  ],
  imports: [
    CommonModule,
    PowerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatSortModule,
    MatInputModule
  ]
})
export class PowerModule { }
