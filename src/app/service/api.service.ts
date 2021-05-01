import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  response:any;
  constructor(private http:HttpClient) {
    
  }

  get_api(api_url)
  {
    return this.http.get(api_url);
  }
}
