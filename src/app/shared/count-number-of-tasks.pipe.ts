import {Pipe, PipeTransform} from '@angular/core';
import {NotesListService} from './notes-list.service';

@Pipe({
  name: 'countNumberOfTasks',
  pure: false,
})
export class CountNumberOfTasksPipe implements PipeTransform {

  constructor(
    public notesListService: NotesListService,
  ) {
  }

  transform(day: string): number {
    return this.notesListService.objectKeys(this.notesListService.tasksList[day] || {}).length;
  }
}
