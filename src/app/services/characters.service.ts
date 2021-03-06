import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient, private md5: Md5) {}

  get() {
    return this.http.get(`${environment.apiUrl}characters`, this.getBody()).toPromise();
  }

  getCharacter(id: number){
    return this.http.get(`${environment.apiUrl}characters/${id}`, this.getBody()).toPromise();
  }

  getBody() {
    const md5 = new Md5();
    const time = Math.floor(Date.now() / 1000);
    const md5Parsed = (md5.appendStr(`${time}${environment.privateKey}${environment.publicKey}`).end() as string);
    return {
      params: {
        apikey: environment.publicKey,
        ts: time,
        hash: md5Parsed
      }
    };
  }
}
