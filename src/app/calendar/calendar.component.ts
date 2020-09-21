import {Component} from '@angular/core';
import {DateService} from '../shared/date.service';
import {NotesListService} from '../shared/notes-list.service';
import {ApiEndpointsService} from '../shared/api-endpoints.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  constructor(
    public dateService: DateService,
    public notesListService: NotesListService,
    private API: ApiEndpointsService,
  ) {
  }

  changeActiveDay(day: string): void {
    console.log(day);
    this.dateService.changeActiveDate(+day > 9 ? day : ('0' + day));
  }
}
