import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public getData(url: string) {
    return (this.httpClient.get(url));
  }
}
