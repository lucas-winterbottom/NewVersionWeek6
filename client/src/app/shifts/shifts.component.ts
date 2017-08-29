import { Component, OnInit } from '@angular/core';
import {ShiftService} from "../shift.service";
import {Shift} from "../shift";

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
  providers: [ShiftService]
})
export class ShiftsComponent implements OnInit {
  shifts: Shift[];
  shift: Shift;
  shift_giver:string;
  shift_taker:string;
  shift_date:string;

  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    this.shiftService.getShifts()
      .subscribe(shifts => 
        this.shifts = shifts); 
  }

}
