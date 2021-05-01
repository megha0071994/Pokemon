import { Component } from '@angular/core';
import {ApiService} from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  response:any;
  results:any;
  current_url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=8';
  next:any;
  previous:any;
  inc=1;

  constructor(private api : ApiService)
  {
    this.get_pokemon(this.current_url);
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

  title = 'pokemon';
}
