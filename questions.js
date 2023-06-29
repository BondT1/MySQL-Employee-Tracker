const MainQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            { value: 'view_departments', name: "view all departments" },
            { value: 'view_roles', name: "view all roles"},
            { value: 'view_employees', name: "view all employees"},
            { value: 'add_department', name: "add a department"},
            { value: 'add_role', name: "add a role"},
            { value: 'add_employee', name: "add an employee"},
            { value: 'update_role', name: "update an employee role"},
        ],

    },
]

const AddDepartmentQs = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the New Department?'
    },
]

const AddRoleQs = [
    {
        type: 'list',
        name: 'role_title',
        message: 'Enter the new role title...'
    },

    {
        type: 'number', 
        name: 'salary',
        message: 'Enter the salary of the new role (numeric input)...',
    }, 
    {
        type: 'list',
        name: 'department_id',
        message: 'In which department is the role in?',
        choices: [
        ],
    },
]

const AddEmployeeQs = [
    {
        type: 'input',
        name:'first_name',
        message: 'What is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the employee?'       
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is the employee\'s role?',
        choices: [
        ],
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Who is the employee\'s manager?',
        choices: [
        ],
    },
]

const UpdateEmployeeRoleQs = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee you want to update...',
        choices: [
        ],
    },
    {
        type: 'list',
        name: 'role_id', 
        message: 'What is the employee\'s new role?',
        choices: [         
        ],
    },
]

module.exports = { MainQuestions, AddDepartmentQs, AddEmployeeQs, AddRoleQs, UpdateEmployeeRoleQs};
