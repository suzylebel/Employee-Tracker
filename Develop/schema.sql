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
    INDEX dep_id (department_id),
    CONSTRAINT fk_dep FOREIGN KEY (department_id) REFERENCES Department (id) ON DELETE CASCADE,
    PRIMARY KEY (id)
)

CREATE TABLE newEmployee (
  id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  role_id INT NULL,
  manager VARCHAR(100) NULL,
  INDEX rol_id (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employeeRole (id) ON DELETE CASCADE,
  PRIMARY KEY (id)
)

INSERT INTO Department (deptname)
VALUES ("Marketing"), ("Finance"), ("HR"), ("IT Dept")

SELECT * FROM Department;

INSERT INTO employeeRole (title, salary, department_id)
VALUES ("Marketing Manager", "70000", 3)
SELECT * FROM employeeRole;

INSERT INTO newEmployee (fname, lname, role_id, manager)
VALUES ("Suzy", "Le BeL", 3, "Ben TA"), ("Colbi", "Le Colburn", 2, "Suzy Le Bel")

SELECT * FROM newEmployee;

