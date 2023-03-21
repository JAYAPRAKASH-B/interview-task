import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiServicesService} from '../api-services.service'

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  constructor(private apiServices: ApiServicesService, private route: Router) { }
  public applications: any = []

  ngOnInit(): void {
    this.apiServices.getApplications('/user/applications').subscribe({
      next: (data) => {this.applications = data},
      error: (err) => {
        switch (err.status) {
          case 0:
            this.route.navigate(['/unknown-error']);
            break;
          case 401:
            this.route.navigate(['/unauthorized-error']);
            break;
          default:
            this.route.navigate(['/unknown-error']);
        }
      },
      complete: () => console.log('response compoleted')
    })
  }

  getOffers() {
    this.route.navigate(['/myoffers']);
  }

}
