import { Component, OnInit } from '@angular/core';
import { downgradeComponent, getAngularJSGlobal } from '@angular/upgrade/static';
import { TestService } from '../test.service';

@Component({
  selector: 'cool',
  templateUrl: './cool.component.html',
  styleUrls: ['./cool.component.scss']
})
export class CoolComponent implements OnInit {

  serviceName = '';

  constructor(private testService: TestService) {
   }

  ngOnInit(): void {
    this.serviceName = this.testService.getName();
  }

}


