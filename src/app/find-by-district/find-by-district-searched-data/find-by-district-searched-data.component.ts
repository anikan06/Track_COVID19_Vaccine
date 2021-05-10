import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomAdapter } from 'src/app/services/custom-adapter.service';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-find-by-district-searched-data',
  templateUrl: './find-by-district-searched-data.component.html',
  styleUrls: ['./find-by-district-searched-data.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class FindByDistrictSearchedDataComponent implements OnInit {

  stateName: any = JSON.parse(sessionStorage.getItem('statesArr'));
  districtForm: FormGroup;
  baseUrl = environment.baseUrl;
  cityList: any;
  hideCity: boolean = false;
  getDistrictURL: string = '/v2/admin/location/districts/';
  getDistrictDataURL: string = '/v2/appointment/sessions/public/findByDistrict';
  slotData: Object;
  

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.createDistrictForm();
    this.spinner.hide();
  }

  createDistrictForm(){
    this.districtForm = this.fb.group({
      stateNm: [''],  
      city: [''],
      date: ['']
    });
  }

  // Choose city using select dropdown
  changeState(e) {
    this.stateNames.setValue(e.target.value, {
      onlySelf: true
    });
    this.slotData = [];
    let stId = this.stateNames.value.substr(this.stateNames.value.indexOf(' ') + 1);
    this.spinner.show();
    this.httpClient.get(this.baseUrl + this.getDistrictURL + stId).subscribe(cit => {
      this.cityList = cit;
      this.hideCity = true;
      this.spinner.hide();
    });
  }

  // Getter method to access formcontrols
  get stateNames() {
    return this.districtForm.get('stateNm');
  }

  changeCity(e) {
    
    this.cityNames.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get cityNames() {
    return this.districtForm.get('city');
  }

  onSubmit() {
    this.spinner.show();
    let getCityId = this.districtForm.value.city.substr(this.districtForm.value.city.indexOf(' ') + 1)
    this.httpClient.get(this.baseUrl + this.getDistrictDataURL, {
      params: {
        district_id: getCityId,
        date: this.districtForm.value.date
      }
    }).subscribe(d => {
      this.slotData = d;
      this.spinner.hide();
    })
  }

}
