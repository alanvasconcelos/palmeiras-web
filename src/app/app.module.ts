import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
    SocioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
