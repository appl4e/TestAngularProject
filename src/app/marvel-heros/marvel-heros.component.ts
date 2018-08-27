import { Component, OnInit } from '@angular/core';

import {HeroService} from './marvel-heros.service';

@Component({
  selector: 'marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
  providers: [HeroService]
})
export class MarvelHeros implements OnInit {

  heros:string[];
  disableBtn = false;
  inputHero = null;
  adding = false;

  AddMore() {
    this.adding = !this.adding;

  }
  addHero(){
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  
  constructor(private ajax: HeroService) {
    this.heros = this.ajax.marvel;
   }

  ngOnInit() {
    
  }

}
