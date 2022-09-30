import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgxCopyPasteModule } from 'ngx-copypaste';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCopyPasteModule,
    
    FormsModule, ReactiveFormsModule, 
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
