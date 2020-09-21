import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiEndpointsService} from './shared/api-endpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
    public dialog: MatDialog,
    public API: ApiEndpointsService,
  ) {}
}


@Component({
  selector: 'app-start-page',
  templateUrl: './app-start-page.html',
})
// tslint:disable-next-line:component-class-suffix
export class StartPage {
}
