import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocioComponent } from './socio.component';

const rotas: Routes = [
    {
        path: '',
        component: SocioComponent
    }
]

export const rounting: ModuleWithProviders = RouterModule.forChild(rotas);