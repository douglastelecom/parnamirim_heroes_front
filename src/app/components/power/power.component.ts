import { Component, OnInit } from '@angular/core';
import { Power } from './power';
import { PowerService } from './power.service';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {
  showCreatePower = false
  power: Power[] = []
  constructor(private powerService: PowerService) { }

  ngOnInit(): void {
    
    // this.powerService.getPower().subscribe(power => {
    //   this.power = power;
    //   console.log(power)})
  }

  //addPower(): void {
    //this.powerService.addPower(this.powerEx).subscribe(()=>{this.powerService.showMessage("Poder Cadastrado")})
  //}
}
