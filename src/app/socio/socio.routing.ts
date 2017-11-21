import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocioComponent } from './socio.component';

const rotas: Routes = [
    { path: 'dash', component: SocioComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(rotas);