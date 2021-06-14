import { Component, OnInit } from '@angular/core';
import { Truck } from "../model/truck";
import { TruckService } from "../service/truck.service";

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit {
  trucks!: Truck[];

  constructor(private truckService: TruckService) {
  }

  ngOnInit() {
    this.truckService.findAll().subscribe(data => {
      this.trucks = data;
    });
  }

}
