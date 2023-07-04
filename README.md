# MySQL Employee Tracker

## Description

The aim of this project was to create a database using MySQL that can allow a business owner to view and manage the departments, roles, and employees in their company. The purpose being to organise and plan the business efficiently, clearly, and quickly. The application uses Inquirer as a user interface to ask questions and direct the user through multiple steps.

The fetaures used throughout this project are:

- Javascript
- MySQL
- Inquirer
- Node.js
- db querys
- Promises
- Seeding 
- MySQL Workbench

The 

## Installation

To use this application, type 'npm install mysql2 --save' and 'npm install inquirer' in your terminal to install the necessary programs. You also need to install the MySQL package and MySQL Workbench package from the MySQL website.

## Usage

Once the necessary programs are installed, start the server by typing 'node index.js' in your terminal. 

You will be met with a list of options:

- Select 'view all departments' to be presented with a formatted table showing department names and department ids
- Select 'view all roles' to be presented with the job title, role id, the department that role belongs to, and the salary for that role
- Select 'view all employees' to be presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- Select 'add a department' to be prompted to enter the name of a department that you want to add to the databsase. The department is then added to the database.
- Select 'add a role' to be prompted to enter the name, salary, and department for the role you want to add to the database. This is then added to the database.
- Select 'add an employee' to be prompted to enter an employee’s first name, last name, role, and manager. That employee is then added to the database.
- Select 'update an employee role' to be prompted to select an employee to update and their new role and this information is updated in the database.

A Walkthrough video of the application in progress - https://drive.google.com/file/d/1-ENbsvdNH9c37EQv4ocP-RA9b0xmdypL/view

## Credits

N/A

## License

N/A


