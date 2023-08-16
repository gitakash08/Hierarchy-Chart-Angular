import { Injectable } from '@angular/core';
import { Employee } from './my-component/customNode';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  private employees: Employee[] = []; // Initialize with your employee data
  constructor() { }
  getEmployees(): Employee[] {
    return this.employees;
  }

}
