const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQs, AddEmployeeQs, AddRoleQs, UpdateEmployeeRoleQs } = require('./questions.js');
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'SinnersNeverSleep',
    database: 'employee_db'
});

db.connect();

const startMenuQuestions = () => {

    inquirer
        .prompt(MainQuestions)
        .then((response) => {
            switch (response.option) {
                case 'view_departments':
                    view_departments();
                    break;
                case 'view_roles':
                    view_roles();
                    break;
                case 'view_employees':
                    view_employees();
                    break;
                case 'add_department':
                    add_department();
                    break;
                case 'add_role':
                    add_role();
                    break;
                case 'add_employee':
                    add_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
            }
            
        });
}

const view_departments = () => {
    db.getDepartments().then((results) => {
        console.table(results);
        startMenuQuestions();
    });
}

const view_roles = () => {
    db.getRoles().then((results) => {
        console.table(results);
        startMenuQuestions();
    });
}

const view_employees = () => {
    db.getEmployees().then((results) => {
        console.table(results);
        startMenuQuestions();
    });
}

const add_department = () => {
    inquirer
        .prompt(AddDepartmentQs)
        .then((response) => {
            db.addDepartment(response).then((results) => {
                console.log('\n', results, '\n');
                startMenuQuestions();
            });
        })
}

const add_role = () => {
    db.getDepartments().then((results) => {
        const departmentQ = AddRoleQs[2];
        results.forEach((department) => {
            departmentQ.choices.push({
                value: department.id,
                name: department.name
            });
        });

    inquirer 
        .prompt(AddRoleQs)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('\n', results, '\n');
                startMenuQuestions();
            });
        })
    });
}

const add_employee = () => {
    db.getRoles().then((results) => {
        const roleQ = AddEmployeeQs[2];
        results.forEach((role) => {
            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQ.choices.push({
                value: role.id,
                name: role_summary
            });
        });

        db.getEmployees().then((results) => {
            const managerQ = AddEmployeeQs[3];
            results.forEach((employee) => {
                managerQ.choices.push({
                    value: employee.id,
                    name: employee.name

                });
            });

            managerQ.choices.push({
                value: null,
                name: 'None'
            });

            inquirer 
                .prompt(AddEmployeeQs)
                .then((response) => {
                    db.addEmployee(response).then((results) => {
                        console.log('\n', results, '\n');
                        startMenuQuestions();
                    });
                })
        });
    });
}

const update_role = () => {
    db.getEmployees().then((results) => {
        const employeeQ = UpdateEmployeeRoleQs[0];
        results.forEach((employee) => {
            employeeQ.choices.push({
                value: employee.id,
                name: employee.name

            });
        });

        db.getRoles().then((results) => {
            const roleQ = UpdateEmployeeRoleQs[1];
            results.forEach((role) => {
                roleQ.choices.push({
                    value: role.id,
                    name: role.title
                });
            });
        
            inquirer
                .prompt(UpdateEmployeeRoleQs)
                .then((response) => {
                    db.updateEmployeeRole(response).then((results) => {
                        console.log('\n', results, '\n');
                        startMenuQuestions();
                    });
                })
                
        });

    });
}

startMenuQuestions();







