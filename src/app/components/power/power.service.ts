import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Power } from './power';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PowerService {
  powerUrl = "http://localhost:8080/power"
  constructor(private matSnackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string): void {
    this.matSnackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  addPower(power: Power): Observable<Power> {
    return this.httpClient.post<Power>(this.powerUrl, power)
  }
  deletePower(id: number): Observable<Power>{
    return this.httpClient.delete<Power>(this.powerUrl+'/'+id)
  }
  getPower(): Observable<Power[]>{
    return this.httpClient.get<Power[]>(this.powerUrl)
  }
}
