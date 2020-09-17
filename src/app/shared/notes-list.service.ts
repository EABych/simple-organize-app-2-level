import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesListService {

  constructor() { }

  public notesList = {
    20200915: ['test'],
    20200901: ['test'],
    20200926: ['test', 'test2'],
  };

  addNote(text: string, date: string): void {
    if (this.notesList[date]){
      this.notesList[date].push(text);
    }else {
      this.notesList[date] = [text];
    }
  }
  deleteNote(index: number, date: string): void {
    this.notesList[date] = this.notesList[date].filter((note, i) => i !== index);
  }
}
