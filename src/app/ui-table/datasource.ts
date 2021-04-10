import {  DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { User } from "../models/users";
import { AuthServiceService } from "../services/auth-service.service";

export class UsersData extends DataSource<any> {

    private ounceSupportData=new BehaviorSubject<User[]>([]);
    private ounceSupportUsers = new BehaviorSubject<boolean>(false);
    public loading$ = this.ounceSupportUsers.asObservable();
    private countgoldlaneSupport=new BehaviorSubject<number>(0);
    public counter$=this.countgoldlaneSupport.asObservable();
  
    private backupSupport;
  
    constructor(private auth:AuthServiceService) {
      super();
    }
    
    connect(): Observable<User[]> {
      return this.ounceSupportData.asObservable();
  
    }

    disconnect() { 
      this.ounceSupportData.complete();
      this.ounceSupportUsers.complete();
    }
    
    loadData(){
       
        this.ounceSupportUsers.next(true);
        this.auth.getTableData().pipe(
          catchError(()=> of([])),
          finalize(()=>{
            this.ounceSupportUsers.next(false);
          })  
        ).subscribe(users=>this.renderOunceUsers(users))
      
    }

    renderOunceUsers(users){
        console.log(users)
      this.backupSupport=users;
      this.countgoldlaneSupport.next(users);
      this.ounceSupportData.next(users);
  
    }
  

    updateAndRenderSupport(id,solution){
      for(var i in this.backupSupport.results){
        if(id==this.backupSupport[i]['id']){
  
          this.backupSupport[i]['solution']=solution;
          break;
  
        }
  
      }
      this.countgoldlaneSupport.next(this.backupSupport);
      this.ounceSupportData.next(this.backupSupport);
    }

  
   
  
  
  }