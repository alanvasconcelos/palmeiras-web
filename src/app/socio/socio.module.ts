import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocioComponent } from './socio.component';
import { routing } from './socio.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    SocioComponent
  ]
})
export class SocioModule { }
