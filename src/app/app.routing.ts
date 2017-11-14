import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

const rotas: Routes = [
    {
        path: '',
        component: BlogComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);