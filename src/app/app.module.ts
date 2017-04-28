import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, SharedModule, PanelModule } from 'primeng/primeng'; 

import { AppComponent } from './app.component';
import { LangPipe } from './lang.pipe';
import { TestingInputsComponent } from './testing-inputs/testing-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    LangPipe,
    TestingInputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    SharedModule,
    PanelModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
