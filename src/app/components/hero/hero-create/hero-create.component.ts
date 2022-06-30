import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PowerService } from '../../power/power.service';
import { Power } from '../../power/power';
@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent implements OnInit {

  formHero!: FormGroup;
  formData = new FormData();
  powerList: Power[]=[];
  hero: Hero = {
    name: "",
    power: []
  }
  picture: any = null;

  constructor(private heroService: HeroService, private powerService: PowerService) { }
  showCreateHero=false
  ngOnInit(): void {
    this.formHero = new FormGroup ({
      name: new FormControl(),
      power: new FormControl()
    })
    this.powerService.getPower().subscribe(power =>{
      this.powerList = power;
    })
  }

  inputFileChange(event: any){
    if (event.target.files && event.target.files[0]){
      this.picture = event.target.files[0]
      this.formData.append('picture', this.picture)
    }
  }

  addHero(): void {
    console.log(this.hero)
    this.hero=this.formHero.value
    this.heroService.addHero(this.hero).subscribe((res)=>{
      console.log(res)
      if (this.picture) {
      this.heroService.addPicture(this.formData, res).subscribe(()=>{
      this.heroService.showMessage("Herói Cadastrado")
      setTimeout(() => location.reload(),1500)})
      }
    })
    
  }

}
