const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQs, AddEmployeeQs, AddRoleQs, UpdateEmployeeRoleQs } = require('./questions.js');
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const database = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'SinnersNeverSleep',
    database: 'employee_db'
});

database.connect();

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
    database.getDepartments().then((results) => {
        console.table(results);
        startMenuQuestions();
    });
}

const view_roles = () => {
    database.getRoles().then((results) => {
        comsole.table(results);
        startMenuQuestions();
    });
}

const view_employees = () => {
    database.getEmployees().then((results) => {
        comsole.table(results);
        startMenuQuestions();
    });
}

const add_department = () => {
    inquirer
        .prompt(AddDepartmentQs)
        .then((response) => {
            database.addDepartment(response).then((results) => {
                console.log('\n', results, '\n');
                startMenuQuestions();
            });
        })
}

const add_role = () => {
    database.getDepartments(). then((results) => {
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
            database.addRole(response).then((results) => {
                console.log('\n', results, '\n');
                startMenuQuestions();
            });
        })
    });
}

const add_employee = () => {
    database.getRoles().then((results) => {
        const roleQ = AddEmployeeQs[2];
        results.ForEach((role) => {
            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQ.choices.push({
                value: role_id,
                name: role_summary
            });
        });

        database.getEmployees().then((results) => {
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
                    database.addEmployee(response).then((results) => {
                        console.log('\n', results, '\n');
                        startMenuQuestions();
                    });
                })
        });
    });
}

const update_role = () => {
    database.getEmployees().then((results) => {
        const employeeQ = UpdateEmployeeRoleQs[0];
        results.forEach((employee) => {
            employeeQ.choices.push({
                value: employee.id,
                name: employee.name

            });
        });

        database.getRoles().then((results) => {
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
                    database.updateEmployeeRole(response).then((results) => {
                        console.log('\n', results, '\n');
                        startMenuQuestions();
                    });
                })
                
        });

    });
}

startMenuQuestions();







