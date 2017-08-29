import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Shift } from './shift';
import 'rxjs/add/operator/map';

@Injectable()
export class ShiftService {

  constructor(private http: Http) { }

  //retrieve
  getShifts() {
    return this.http.get('http://localhost/3000/api/shifts')
      .map(res => res.json());
  }
  //add shift method
  addShift(newShift){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://://localhost/3000/api/shift', newShift, {headers:headers})
      .map(res => res.json());
  }

  //delete shift method
  deleteShift(id){
    return this.http.delete("http://localhost/3000/api/shifts/" + id)
      .map(res => res.json());
  }
}
