import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'find-by-pin-searched-data',
  templateUrl: './find-by-pin-searched-data.component.html',
  styleUrls: ['./find-by-pin-searched-data.component.scss']
})
export class FindByPinSearchedDataComponent implements OnInit {
  @Input()
  pinData: any

  constructor() { }

  ngOnInit() {
  }

}
