import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"
import 'firebase/auth'
import { Router } from '@angular/router';
// let headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = "https://api.github.com/"
  limit=10

  constructor(private http:HttpClient,private fireAuth:AngularFireAuth,private router: Router) {  }


  getTableData() {
    return this.http.get("http://localhost:3000/Users")
  }

  loginWithGoogle() {
     this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
       res => {
         console.log("Login Sucessfull")
       }
     ).catch(err => {
       console.log("Error while sign in",err)
     })
  }

  loginWithGitHub() {
    this.fireAuth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
      res => {
        console.log("Login Sucessfull")
        if(res) {
          this.router.navigate(['/me']);
        }else {
          this.router.navigate(['/auth']);
        }
      }

    ).catch(err => {
      console.log("Error while sign in",err)
    })
  }

  getTrendingRepos(language,sort,order,per_page) {
    return this.http.get(`${this.url}search/repositories?q=language:${language}&sort=${sort}&order=${order}&per_page=${per_page}`)
  }


}
