import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './carbon-footprint-result/carbon-footprint-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
