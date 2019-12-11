import { Component, OnInit } from '@angular/core';
import { BatchService } from './batches.service';
import { IApplication } from '../application';

@Component({
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  application : IApplication[] ;
  errorMessage: any;

 
  constructor( private batchService : BatchService ) { }

  ngOnInit() {
      this.batchService.getApplications().subscribe(
        applications => {
           this.application = applications,
           console.log('All: ' + JSON.stringify(this.application))
        }
      );
  }
}
