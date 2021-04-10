import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// let headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = "https://api.github.com/"
  limit=10

  constructor(private http:HttpClient,) {  }


  getDataByUsername(username) {
    return this.http.get(`${this.url}users/${username}`) 
  }

  getReposByUsername(username) {
    return this.http.get(`${this.url}users/${username}/repos`,{params:{"per_page":this.limit.toString()}}) 
  }

  getTableData() {
    return this.http.get("http://localhost:3000/Users")
  }


}
