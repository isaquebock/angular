import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.compontent';
import { MyComponent2Component } from './my-component2/my-component2.component'

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
