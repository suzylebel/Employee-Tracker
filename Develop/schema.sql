DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT,
    deptname VARCHAR(30) NULL,
    PRIMARY KEY (id)
)

CREATE TABLE employeeRole (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,4),
    department_id INT, 
    PRIMARY KEY (id)
)

CREATE TABLE newEmployee (
  id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
   role_id INT NULL,
  manager VARCHAR(100) NULL,
  PRIMARY KEY (id)
)

INSERT INTO Department (deptname)
VALUES ("Marketing"), ("Finance"), ("HR"), ("IT Dept")

SELECT * FROM Department;

INSERT INTO employeeRole (title, salary, department_id)
VALUES ("Marketing Manager", "70000", "")
SELECT * FROM employeeRole;

INSERT INTO newEmployee (fname, lname, role_id, manager)
VALUES ("Suzy", "Le BeL", "Marketing Manager", "Ben TA"), ("Colbi", "Le Colburn", "Intern", "Suzy Le Bel")

SELECT * FROM newEmployee;

