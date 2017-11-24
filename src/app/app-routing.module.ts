import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

const rotas: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'socio', loadChildren: 'app/socio/socio.module#SocioModule' },
    { path: '', pathMatch: 'full', redirectTo: 'blog' },
    { path: '**', redirectTo: 'blog' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}