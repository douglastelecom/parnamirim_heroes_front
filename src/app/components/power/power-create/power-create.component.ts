import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Power } from '../power';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-power-create',
  templateUrl: './power-create.component.html',
  styleUrls: ['./power-create.component.scss']
})
export class PowerCreateComponent implements OnInit {

  power!: Power;

  formPower!: FormGroup;

  constructor(private powerService: PowerService) { }

  ngOnInit(): void {
    this.formPower = new FormGroup({
      name: new FormControl(),
      powerPoints: new FormControl()
    })
  }
  showCreatePower=false;
  addPower(): void {
    this.power = this.formPower.value; 
    this.powerService.addPower(this.power).subscribe(()=>{this.powerService.showMessage("Poder Cadastrado")
    })
    setTimeout(() => location.reload(),1500)
  }
}
