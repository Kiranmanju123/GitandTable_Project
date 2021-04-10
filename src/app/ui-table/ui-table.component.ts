import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { UsersData } from './datasource';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.css']
})
export class UiTableComponent implements OnInit {
  displayedColumns: string[] = ['id','name','screen_name','followers_count','following_count','location','verified'];
  datasource : UsersData;


  constructor(private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.datasource = new UsersData(this.auth)
    this.datasource.loadData();
    
  }

}
