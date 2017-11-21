import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

const rotas: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'blog' },
    { path: 'blog', component: BlogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'socio', loadChildren: 'app/socio/socio.module#SocioModule' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);