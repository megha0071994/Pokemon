import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-oldcode',
  templateUrl: './oldcode.component.html',
  styleUrls: ['./oldcode.component.css']
})
export class OldcodeComponent implements OnInit {

  response:any;
  results:any;
  current_url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=8';
  next:any;
  previous:any;
  inc=1;

  constructor(private api : ApiService) {
    
  }

  ngOnInit() {
  }

  get_pokemon(url)
  {
    this.api.get_api(url).subscribe((response)=>{
      this.response = response;
      this.results = this.response.results;
      this.next = this.response.next;
      this.previous = this.response.previous;
    });
  }

  get_next()
  {
    if(this.next != null){
      this.inc = this.inc+20;
      this.get_pokemon(this.next);
    }
  }

  get_previous()
  {
    if(this.previous != null){
      this.inc = this.inc-20;
      this.get_pokemon(this.previous);
    }
  }

}
