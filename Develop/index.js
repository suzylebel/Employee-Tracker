const inquirer = require("inquirer");
const mysql = require("mysql");
// const table = require("console.table");

// seeder files

// create db connection 
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "idateQuinn5",
  database: "top_songsDB"
});

// make the connection
connection.connect(function (err) {
  if (err) throw err;
  start();
});


function start() {
  inquirer
  .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Add an a role",
        "Add an Employee",
        "Add a Department",
        "View all roles",
        "View all Employees",
        "View all Departments",
        "exit"
      ]
    }).then((answers) => {
    switch (answers.action) {
      case "Add an a role": 
        addRole();
        break;
      
      case "Add an Employee": 
        addEmployee();
        break;
      
      case "Add a Department": 
        addDepartment();
        break;
      
      case "View all roles": 
        viewRoles();
        break;
      
      case "View all Employees": 
        viewEmployees();
        break;
      
      case "View all Departments": 
        viewDepartments();
        break;
      
      case "exit": 
        connection.end
        console.log("See your team")
        break;
    }
  });
  }

    function addEmployee() {
      inquirer
        .prompt({
          name: "fname",
          type: "input",
          message: "What is the first name of the employee?"
        },
          {
            name: "lname",
            type: "input",
            message: "What is the last name of the employee?"
          },
          {
            name: "employeerole",
            type: "list",
            message: "What is the role of the employee?",
            choices: ["MANAGER", "ASSOCIATE", "INTERN", "SOFTWARE DEV"]
          },
          {
            name: "manager",
            type: "input",
            message: "Who is the employee's manager?",
          }
        )
        .then(function (answer) {
          connection.query(
            "INSERT INTO newEmployee SET ? ",
            {

              fname: answer.fname,
              lname: answer.lname,
              role_id: answer.employeerole,
              manager: answer.manager

            },
            function(err) {
              if (err) throw err;
              console.log("employee added successfully!");
              start();
            }
          );
        });
    }


    function viewEmployees() {
      inquirer
    .prompt({
      name: "viewemployee",
      type: "list",
      message: "What employee would you like to see?"
    })
  }

