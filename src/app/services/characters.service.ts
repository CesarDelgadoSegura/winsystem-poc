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
    const time = Math.floor(Date.now() / 1000);
    const md5 = (this.md5.appendStr(`${time}${environment.privateKey}${environment.publicKey}`).end() as string);
    const body = {
      params: {
        apikey: environment.publicKey,
        ts: time,
        hash: md5
      }
    };

    return this.http.get(`${environment.apiUrl}characters`, body).toPromise();
  }
}
