import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
  public readonly URL: string = 'https://ang-simple-organizer.firebaseio.com/tasks';
}
