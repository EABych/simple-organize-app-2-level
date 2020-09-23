import {Pipe, PipeTransform} from '@angular/core';
import {NotesListService} from './notes-list.service';

@Pipe({
  name: 'getTasksOfCurrentDay'
})

export class GetTasksOfCurrentDayPipe implements PipeTransform {
  constructor(
    public notesListService: NotesListService,
  ) {
  }

  transform(day: string): string {
    return this.notesListService.tasksList[day] || {};
  }

}
