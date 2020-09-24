import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {DateService} from '../_services/date.service';
import {ApiEndpointsService} from '../_services/api-endpoints.service';
import {AccountService} from '../_services/account.service'


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent {
  checkoutForm;

  constructor(
    public dateService: DateService,
    private formBuilder: FormBuilder,
    public API: ApiEndpointsService,
    public accountService: AccountService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      text: '',
    });
  }

  addNewNote(): void {
    if (!this.checkoutForm.value.text){
      return;
    }
    this.accountService.addNote(
      this.checkoutForm.value.text,
      this.dateService.activeDate.value.format('YYYYMMDD')
    );
    this.checkoutForm.reset();
  }


  deleteNote(index: string): void {
    this.accountService.deleteNote(
      index,
      this.dateService.activeDate.value.format('YYYYMMDD')
    );
  }
}
