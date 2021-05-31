# Employee List

Employee List is built using .NET Core and Angular. This application displays a list of all Employees and allows the user to add/edit/delete employee information.

## Instructions

1. Open Visual Studio and go to "File > Open > Project/Solution"
2. Find "Employee_List.sln" and open it.
3. Once opened, run the project by pressing on the IIS Express run button.
4. The project will run in a new browser.

## Explanation

This project does not touch on any databases, but it instead just updates the file, employee.json instead. So every HTTP calls only affects the JSON file.

## Reflection

Although the project was meant to be Front End, since the project requires me to build it using Visual Studio, I presumed that I needed to implement .NET Core as well to have some Full Stack functionalities. There were a lot of times where I had to tinker with the Back End in order to fulfill the Add/Update/Delete requirements. The only .NET files that I touched on were Employee.cs and EmployeeController.cs.

There are somethings where I have to properly implement, like hitting the submit button takes all the changes made in the forms (regardless of whether it's the one on the screen) and POSTs them.