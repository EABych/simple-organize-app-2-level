import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, StartPage} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurrentMonthComponent } from './current-month/current-month.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { MomentPipe } from './shared/moment.pipe';
import {HttpClientModule} from '@angular/common/http';
import { DayToDbFormatPipe } from './shared/day-to-db-format.pipe';
import { GetTasksOfCurrentDayPipe } from './shared/get-tasks-of-current-day.pipe';
import { CountNumberOfTasksPipe } from './shared/count-number-of-tasks.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CurrentMonthComponent,
    CalendarComponent,
    NoteFormComponent,
    StartPage,
    MomentPipe,
    DayToDbFormatPipe,
    GetTasksOfCurrentDayPipe,
    CountNumberOfTasksPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
