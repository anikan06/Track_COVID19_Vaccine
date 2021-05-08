import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter } from '../services/custom-adapter.service';

@Component({
  selector: 'app-find-by-pin',
  templateUrl: './find-by-pin.component.html',
  styleUrls: ['./find-by-pin.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class FindByPinComponent implements OnInit {
  baseUrl = environment.baseUrl;
  getUrl = '/v2/appointment/sessions/public/findByPin';
  contactForm: FormGroup;
  slotData;

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      pincode: [''],  
      date: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value.date );

    this.httpClient.get(this.baseUrl + this.getUrl, {params: {
      pincode: this.contactForm.value.pincode,
      date: this.contactForm.value.date
    }}).subscribe(x => {
      console.log(x);
      this.slotData = x;
    })
}

}
