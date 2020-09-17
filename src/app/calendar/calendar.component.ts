import {Component} from '@angular/core';
import {DateService} from '../shared/date.service';
import {NotesListService} from '../shared/notes-list.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  constructor(
    public dateService: DateService,
    public notesListService: NotesListService,

  ) {
  }

  changeActiveDay(day: string): void {
    this.dateService.changeActiveDate(+day > 9 ? day : ('0' + day));
  }
}
