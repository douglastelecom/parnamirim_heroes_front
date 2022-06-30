import { FormControl } from '@angular/forms';
import { HeroService } from './../hero/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  showDuelo = false;
  showLoad = false;
  showWinner = false;
  heroes: Hero[] = [];
  showname: string = "";
  topping1 = new FormControl();
  topping2 = new FormControl();
  showPicture!: string;
  ngOnInit(): void {
  }
  duelo(): void {
    this.heroService.getHero().subscribe((res) => {
      this.heroes = res;
    });
  }
  duelar(): void {
    this.showLoad = true;
    this.showWinner = false;
    this.heroService
      .duelo(this.topping1.value, this.topping2.value)
      .subscribe((res) => {
        console.log(res);
        if (res.name==="Empate"){
          console.log(res);
          this.showname="Confronto empatado!";
          this.showPicture="../../../assets/img/pictures/"+res.picture;
          console.log(this.showPicture)
        } else {
          this.showname=res.name+" venceu o duelo!"
          this.showPicture="../../../assets/img/pictures/"+res.picture;
          console.log(this.showPicture)
        }
        setTimeout(() => {this.showLoad=false;this.showWinner=true},2500);
      });
  }
}
