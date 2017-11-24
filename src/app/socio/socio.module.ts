import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocioComponent } from './socio.component';
import { SocioRoutingModule } from './socio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SocioRoutingModule
  ],
  declarations: [
    SocioComponent
  ]
})
export class SocioModule { }
