import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'covid19VaccineTracker';
  baseUrl = environment.baseUrl;
  getStateUrl = '/v2/admin/location/states';
  allStates;

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
  ) {

  }

  ngOnInit() {
    this.spinner.show();
    this.httpClient.get(this.baseUrl + this.getStateUrl).subscribe(states => {
      this.spinner.hide();
      this.allStates = states;
      sessionStorage.setItem('statesArr',JSON.stringify(this.allStates));
    })
  }
}
