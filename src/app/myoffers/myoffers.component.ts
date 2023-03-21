import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.scss']
})
export class MyoffersComponent implements OnInit {
  offers: any = []
  constructor(private apiService: ApiServicesService, private route: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiService.getOffers(1).subscribe({
      next: (data) => {
        this.offers = data;
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
      complete: () => console.log('response completed')
    })
  }

}
