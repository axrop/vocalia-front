import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent  {

  @Input() public title: string;
    @Input() public isUserLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
