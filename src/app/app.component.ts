import { Component } from '@angular/core';
import {ApiService} from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  response:any;
  results=[];
  current_url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
  next:any;
  previous:any;
  inner_response:any;

  constructor(private api : ApiService)
  {
    this.get_pokemon(this.current_url);
  }

  get_pokemon(url)
  {
    var _this = this;
    this.api.get_api(url).subscribe((response)=>{
      this.response = response;
      this.next = this.response.next;
      this.previous = this.response.previous; // console.log(this.response.results);
      this.response.results.forEach(function(item){ 
        _this.api.get_api(item.url).subscribe((res) => { 
          _this.inner_response = res;
          // console.log(_this.inner_response.types);
          var type = [];
          _this.inner_response.types.forEach((resp)=>{
              type.push(resp.type.name);
          });
          var arr = {
                    "name" : item.name,
                    "image" : _this.inner_response.sprites.front_shiny,
                    "type" : type
                  };
                  // console.log(arr); return false;
          _this.results.push(arr);
        });
      });
    });
  }

  onScrollDown()
  { console.log(this.next);
    if(this.next!=null){
      this.get_pokemon(this.next);
    }
  }

  title = 'Pokedex';
}
