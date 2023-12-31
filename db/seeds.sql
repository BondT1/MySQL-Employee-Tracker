INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 80000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 120000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Account Manager', 160000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Accountant', 125000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Legal Team Lead', 250000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (8, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Mike', 'Chan', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Ashley', 'Rodriguez', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Kevin', 'Tupik', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Kunal', 'Singh', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Malia', 'Brown', 6, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Sarah', 'Lourd', 7, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Tom', 'Allen', 8, 7);

