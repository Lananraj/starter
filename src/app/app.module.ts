import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { BatchService } from './batches/batches.service';
import { HttpClientModule } from '@angular/common/http';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    routingComponents,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
