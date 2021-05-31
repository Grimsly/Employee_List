import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public employees: Employee[];
  public jobs: string[] = ["", "Project Manager", "Production Manager", "General Manager", "HR Director", "Senior Editor", "Editor"];
  public activeEmployee: Employee = null;

  employeesURL: string = "";
  http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.employeesURL = baseUrl + 'employee';
    this.http = http;

    http.get<Employee[]>(this.employeesURL).subscribe(result => {

      if (result === null) {
        this.employees = []
      } else {
        this.employees = result;
      }
      console.log(this.employees);
    }, error => console.error(error));
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addEmployee = () => {
    const employee = { fullName: "", address: "", phoneNumber: null, position: null };
    this.employees.push(employee);
    this.activeEmployee = employee;
  }

  removeEmployee = (employee: Employee) => {
    this.employees.splice(this.employees.indexOf(employee), 1);
    this.onSubmit();
  }

  setActiveEmployee = (employee: Employee) => {
    this.activeEmployee = employee;
  }

  onSelected = (event: Event, employee: Employee) => {
    const index = this.jobs.indexOf((<HTMLInputElement>event.target).value);
    employee.position = index;
  }

  onSubmit = () => {
    console.log(JSON.stringify(this.employees));
    console.log(JSON.parse(JSON.stringify(this.employees)));

    this.http.post(this.employeesURL, JSON.stringify(this.employees), this.httpOptions)
      .subscribe(
        (error) => console.log(error)
      )
  }
}

interface Employee {
  fullName: string;
  address: string;
  phoneNumber: number;
  position: number
}
