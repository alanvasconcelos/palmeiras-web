import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocioComponent } from './socio.component';

const rotas: Routes = [
    { path: 'dash', component: SocioComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class SocioRoutingModule {}