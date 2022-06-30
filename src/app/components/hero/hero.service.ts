import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = "http://localhost:8080/hero"
  constructor(private matSnackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string): void {
    this.matSnackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  addHero(hero: Hero): Observable<number> {
    return this.httpClient.post<number>(this.heroUrl, hero)
  }
  getHero(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroUrl)
  }
  duelo(a:number, b:number): Observable<Hero> {
    return this.httpClient.get<Hero>(this.heroUrl+'/duelo/?hero1='+a+'&hero2='+b)
  }
  addPicture(picture: FormData, id: number): Observable<void> {
    return this.httpClient.post<void>(this.heroUrl+'/picture/?id='+id, picture)
  }
}
