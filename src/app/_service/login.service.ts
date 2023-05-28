import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl  = `${environment.HOST}/auth/`;

  constructor(private http:HttpClient) { }

  public login (username:string, password:string){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username+":"+password)})
    const body = {'usuario':username, 'contrasenia':password};
    return this.http.post(this.baseUrl+"login", body, {headers, responseType:'text' as 'json'})
  }

  public getUsers (){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin'+":"+'123')})
    return this.http.get(this.baseUrl+"getUsers", {headers})
  }

}
