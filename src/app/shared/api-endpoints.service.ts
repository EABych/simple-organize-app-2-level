import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  public initialIsFetching = true;
  public isFetching = false;

  constructor(
    private constants: Constants,
    private http: HttpClient,
  ) { }

  public startFetching(init?: boolean): void {
    init ? this.initialIsFetching = true : this.isFetching = true;
  }


  public finishFetching(init?: boolean): void {
    init ? this.initialIsFetching = false : this.isFetching = false;
  }

  public getAllNotesForAllDates(): Observable<any> {
    return this.http
      .get(`${this.constants.URL}.json`)
      .pipe(map(res => {
        return res;
      }));
  }

  public addNewTaskForCurrentDate(text: string, date: string): Observable<any> {
    return this.http
      .post(`${this.constants.URL}/${date}.json`, {text})
      .pipe(map(res => {
        return res;
      }));
  }

  public deleteTaskFromIdForCurrentDate(date: string, id: string): Observable<any> {
    return this.http
      .delete(`${this.constants.URL}/${date}/${id}.json`);
  }
}
