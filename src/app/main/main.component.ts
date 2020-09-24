import { Component, OnInit } from '@angular/core';
import {ApiEndpointsService} from '../_services/api-endpoints.service';
import {AccountService} from '../_services/account.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public API: ApiEndpointsService,
    public accountService: AccountService,

  ) { 
    console.log(this.accountService)

  }

  ngOnInit(): void {
  }

}
