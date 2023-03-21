import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  public header = new HttpHeaders({ 'Authorization': `${environment.token}` });
  

  getUser(url: any) {
    return this.http.get(environment.baseUrl + url, {headers: this.header})
  }

  getApplications(url: any) {
    return this.http.get(environment.baseUrl + url, {headers: this.header})
  }

  getOffers(appId: any) {
    return this.http.get(environment.baseUrl + '/user/applications/' + appId + '/offers', {headers: this.header})
  }
}
