import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServicesService } from '../api-services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiServicesService, private route: Router, private spinner: NgxSpinnerService) { }
  public user: any = {};
  public applications: any = []

  ngOnInit(): void {
    this.spinner.show();
    this.apiService.getUser('/user').subscribe({
      next: (data) => {
        this.user = data;
        this.spinner.hide();
      },
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

  getMyApplications() {
    this.spinner.show();
    this.apiService.getApplications('/user/applications').subscribe({
      next: (data) => {
        this.applications = data;
        this.spinner.hide();
      },
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
