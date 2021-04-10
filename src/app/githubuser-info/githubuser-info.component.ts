import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-githubuser-info',
  templateUrl: './githubuser-info.component.html',
  styleUrls: ['./githubuser-info.component.css']
})
export class GithubuserInfoComponent implements OnInit {
  username;name;location;repos;avatar
  

  constructor(private auth:AuthServiceService,private router: Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    this.auth.getDataByUsername(this.username).subscribe((data) => {
      this.name = data['name']
      this.location = data['location']
      this.avatar = data['avatar_url']
    })

    this.auth.getReposByUsername(this.username).subscribe((data) => {
      this.repos = data
    })
    

  }

  logout() {
    localStorage.setItem("username","")
    this.router.navigate(['/auth']);
  }

}
