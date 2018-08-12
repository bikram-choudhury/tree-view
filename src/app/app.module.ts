import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { AgecalculatorPipe } from './pipes/agecalculator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    AgecalculatorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TreeViewComponent]
})
export class AppModule { }
