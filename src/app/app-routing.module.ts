import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { JobComponent } from './job/job.component';


const routes: Routes = [
  {path : 'home' , component : BatchesComponent},
  {path : 'jobs' , component : JobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BatchesComponent , JobComponent ]
