import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {NotesListService} from '../shared/notes-list.service';
import {DateService} from '../shared/date.service';
import {ApiEndpointsService} from '../shared/api-endpoints.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent {
  checkoutForm;

  constructor(
    public notesListService: NotesListService,
    public dateService: DateService,
    private formBuilder: FormBuilder,
    public API: ApiEndpointsService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      text: '',
    });
    this.notesListService.getNotes();
  }

  addNewNote(): void {
    if (!this.checkoutForm.value.text){
      return;
    }
    this.notesListService.addNote(
      this.checkoutForm.value.text,
      this.dateService.activeDate.value.format('YYYYMMDD')
    );
    this.checkoutForm.reset();
  }


  deleteNote(index: string): void {
    this.notesListService.deleteNote(
      index,
      this.dateService.activeDate.value.format('YYYYMMDD')
    );
  }
}
