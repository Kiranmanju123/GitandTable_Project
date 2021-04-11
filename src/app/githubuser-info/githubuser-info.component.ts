import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-githubuser-info',
  templateUrl: './githubuser-info.component.html',
  styleUrls: ['./githubuser-info.component.css']
})
export class GithubuserInfoComponent implements OnInit {
  language="javascript"
  sort="stars"
  order="desc"
  per_page="10"
  trendingRepos;

  

  constructor(private auth:AuthServiceService,private router: Router) { }

  ngOnInit(): void {
  
    this.auth.getTrendingRepos(this.language,this.sort,this.order,this.per_page).subscribe((data) => {
      this.trendingRepos = data['items']
    })

  }

  search() {
   
    var value=(<HTMLInputElement>(document.getElementById('lang'))).value;
    this.language = value
    this.auth.getTrendingRepos(this.language,this.sort,this.order,this.per_page).subscribe((data) => {
      // this.loading=false
      this.trendingRepos = data['items']
    })
  }

  logout() {
    this.router.navigate(['/auth']);
  }
  
}
