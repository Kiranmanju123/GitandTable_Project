import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usernameofuser;

  constructor(private auth:AuthServiceService,private router: Router) { }

  ngOnInit(): void {

  }

  getUsername(){
    var username=(<HTMLInputElement>(document.getElementById('username'))).value;
    if(username.length<=0) {
     alert("Pleas Enter Your Username")
    }
    this.auth.getDataByUsername(username).subscribe((data) => {
      this.usernameofuser = data['login']
      localStorage.setItem("username",this.usernameofuser)
      this.router.navigate(['/me']);
    })
  }

}
