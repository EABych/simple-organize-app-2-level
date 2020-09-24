import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
// import { environment } from '@environments/environment';
// import { User } from '../_models';
import {ApiEndpointsService} from './api-endpoints.service';


export class User {
    id?: string;
    login?: string;
    email?: string;
    tasksList?: any;
}

export class IUserRes {
    email?: string;
    password?: string;
    tasksList? : any;
}


@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private API: ApiEndpointsService,
        private _snackBar: MatSnackBar,
    ) {
    }

    public user = {};
    public loading = true;
    public objectKeys = Object.keys;



    login({login, password}) {
        this.API.startFetching();

        this.API.login(login, password).subscribe(
            res => {
              this.API.finishFetching(true);

              !res && 
              this._snackBar.open('This login does`n exist!', 'End now', {
                duration: 1500,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              });


              const data: IUserRes = Object.values(res)[0]
              const id: string = Object.keys(res)[0]

              

                if(data.password === password) {
                    this.user = {
                        id,
                        login,
                        email: data.email, 
                        tasksList: data.tasksList
                    };
                      this.router.navigate(['/']);
                } else {
                    this._snackBar.open('Password doesn`t match!!', 'End now', {
                        duration: 1500,
                        horizontalPosition: 'right',
                        verticalPosition: 'top',
                      });
                    }
                return 'qwe'
            },
            error => {
              console.log(error);
              this.API.finishFetching(true);
            }
          );
    }

    logout() {
        this.user = {};
        this.router.navigate(['/login']);
    }
    
    register({login, password, email}) :void {
        this.API.startFetching();

        this.API.registration(login, password, email).subscribe(
            res => {
              this.API.finishFetching(true);
              this.user = {
                  id: res.name,
                  login,
                  email,
                  tasksList: {}
              };
                this.router.navigate(['/']);
            },
            error => {
              console.log(error);
              this.API.finishFetching(true);
            }
          );
    }


    addNote(text: string, date: string): void {
        this.API.startFetching();
    
        const {id = '', login = ''} = this.user

        this.API.addNewTaskForCurrentDate(text, date, id, login).subscribe(
          res => {
            const currentDate = this.user.tasksList[date];
            if (currentDate) {
              currentDate[res.name] = {text};
            } else {
                this.user.tasksList[date] = {[res.name]: {text}};
            }
            this.API.finishFetching();
    
          },
          error => {
            console.log(error);
            this.API.finishFetching();
          }
        );
      }
    
      getNotes(): void {
        this.API.startFetching(true);

        const {id = '', login = ''} = this.user

        this.API.getAllNotesForAllDates(id, login).subscribe(
          res => {
            this.API.finishFetching(true);
            this.user.tasksList = res;
          },
          error => {
            console.log(error);
            this.API.finishFetching(true);
          }
        );
      }
    
    
      deleteNote(noteId: string, date: string, userId = this.user.id, userName = this.user.login): void {
        this.API.startFetching();

        const {id = '', login = ''} = this.user

        this.API.deleteTaskFromIdForCurrentDate(date, noteId, id, login).subscribe(
          () => {
            delete this.user.tasksList[date][id];
            this.API.finishFetching();
          },
          error => {
            console.log(error);
            this.API.finishFetching();
          }
        );
      }

}