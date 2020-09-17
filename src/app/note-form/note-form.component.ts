import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {NotesListService} from '../shared/notes-list.service';
import {DateService} from '../shared/date.service';

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
  ) {
    this.checkoutForm = this.formBuilder.group({
      text: '',
    });
  }

  addNewNote(): void {
    if (!this.checkoutForm.value.text){
      return;
    }
    this.notesListService.addNote(this.checkoutForm.value.text, this.dateService.activeDate.value.format('YYYYMMDD'));
    this.checkoutForm.reset();
  }
  deleteNote(index: number): void {
    this.notesListService.deleteNote(index, this.dateService.activeDate.value.format('YYYYMMDD'));
  }
}
