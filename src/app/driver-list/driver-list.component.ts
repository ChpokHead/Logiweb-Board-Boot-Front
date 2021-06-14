import { Component, OnInit } from '@angular/core';
import { Driver } from "../model/driver";
import { DriverService } from "../service/driver.service";
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'router-outlet',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers!: Driver[];

  constructor(private driverService: DriverService) {
  }

  ngOnInit() {
    this.driverService.findAll().subscribe(data => {
      this.drivers = data;
    });
  }

}
