import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {}

}
