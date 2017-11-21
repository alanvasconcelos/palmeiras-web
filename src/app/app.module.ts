import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { SocioModule } from './socio/socio.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SocioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
