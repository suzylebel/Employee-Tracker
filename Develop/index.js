const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");

// seeder files (?)

// create db connection 
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "idateQuinn5",
  database: "employee_trackerDB"
});

// make the connection
connection.connect(function (err) {
  if (err) throw err;
  // afterConnection();
  console.log(" ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄");
console.log("▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌");
console.log("▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀       ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌");
console.log('▐░▌          ▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌                    ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌▐░▌  ▐░▌          ▐░▌       ▐░▌');
console.log('▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌');
console.log('▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌');
console.log('▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀           ▐░▌     ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░▌░▌   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ ');
console.log('▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌                    ▐░▌     ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌▐░▌  ▐░▌          ▐░▌     ▐░▌  ');
console.log('▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░▌      ▐░▌ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ');
console.log('▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌');
console.log(' ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀            ▀       ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ');
//  console.log(" _____                 _                         _____               _\n| ____|_ __ ___  _ __ | | ___  _   _  ___  ___  |_   _| __ __ _  ___| | _____ _ __\n |  _| | '_ ` _ \| '_ \| |/ _ \| | | |/ _ \/ _ \   | || '__/ _` |/ __| |/ / _ \ '__|\n| |___| | | | | | |_) | | (_) | |_| |  __/  __/   | || | | (_| | (__|   <  __/ |\n|_____|_| |_| |_| .__/|_|\___/ \__, |\___|\___|   |_||_|  \__,_|\___|_|\_\___|_|\n|_|\n|___/")
  start();
});
// --------------connection query after function-----------
// function afterConnection() {
//   connection.query("SELECT * FROM newEmployee", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
 
// }
// ----------------------- PROMPT USER--------------
function start() {
  inquirer
  .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Add a a role",
        "Add an Employee",
        "Add a Department",
        "View all roles",
        "View all Employees",
        "View all Departments",
        "exit"
      ]
    }).then((answers) => {
      // ----------------------SWTICH STATEMENT-----------------
    switch (answers.action) {
      case "Add a a role": 
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

        case "View all roles": 
        viewRoles();
        break;
      
      case "Delete Employees": 
        deleteEmployees();
        break;
      
      // case "View all Departments": 
      //   viewDepartments();
      //   break;  
      
      case "See the entire team": 
      
        viewEntireTeam();
        break;
    }
  });
  }

  function deleteEmployees() {
    connection.query('SELECT * FROM newEmployee', function(err, res) {
      if (err) throw err;
    inquirer
    .prompt([
      {
      name: "delete",
      type: "rawlist",
      message: "What employee do you want to delete?",
      choices: function () {
        let choiceEmmployeeDel = [];
        for (var i = 0; i < res.length; i++) {
          choiceEmmployeeDel.push(res[i].fname + ' ' + res[i].lname);
        }
        return choiceEmmployeeDel
      },
    }
  ]).then(function (answer) {
    let employee = answer.choices.split('')
    connection.query("DELETE FROM newEmployee where fname = ? AND lname = ?")
    console.log("Employee was successfully removed!")
    viewEmployees();
    start();
  // helper function "get all employees" get them by index #

// by index (bob, joe) by id. Query by ID
  },

  // ==================ADD EMPLOYEE========================
    function addEmployee() {
      inquirer
        .prompt([
          {
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
            choices: [1, 2, 3, 4]
          },
          {
            name: "manager",
            type: "input",
            message: "Who is the employee's manager?"
          },

        ]).then(function (answer) {
          console.log("Employee Added!");
        query = "INSERT INTO newEmployee SET ? ";
            connection.query(query,{
              fname: answer.fname,
              lname: answer.lname,
              role_id: answer.employeerole,
              manager: answer.manager,
            })
            console.table(answer)
        
            viewEmployees();
            start();
            
            },
            function(err, res) {
              if (err) throw err;

            }
          );
        
    })

  //   function updateEmployee(){
  //     console.log("updating...\n");
  //     connection.query("Update newEmployee SET ? WHERE ?"),
  //     [{

  //     },
  //     {
  //         price: ""
  //     }
  // ],
  // function (err, res) {
  //   if (err) throw err;
  //   console.log(res.affectedRows + " employee updated!\n");
    
// ----------------------------VIEW EMPLOYEE ------------------------
    function viewEmployees() {
      console.log("Showing all current employees...\n");
      connection.query("SELECT * FROM newEmployee", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
        // connection.end();
      });
    }
    
    // ----------------------------VIEW Deparment ------------------------
    function viewDepartments() {
      console.log("Showing all Departments...\n");
      connection.query("SELECT * FROM Department", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
        // connection.end();
      });
    })

    // / ==================ADD Role========================
    function addRole() {
      inquirer
        .prompt([
          {
          name: "title",
          type: "input",
          message: "What Role would you like to add?"
        },
        {
          name: "salary",
          type: "list",
          message: "What is the salary for this role?",
          choices: [20000, 50000, 60000, 70000, 80000, 90000, 100000, 120000]
        },

        ]).then(function (answer) {
          console.log("Employee Added!");
        query = "INSERT INTO employeeRole SET ? ";
            connection.query(query,{
             title: answer.title,
              salary: answer.salary,
             
            })
            console.table(answer)
        
            viewRoles();
            start();
            
            },
            function(err, res) {
              if (err) throw err;

            }
          );
        
    }

    // ----------------------------VIEW Employee Roles ------------------------
    function viewRoles() {
      console.log("Showing all Roles...\n");
      connection.query("SELECT * FROM employeeRole", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
        // connection.end();
      });
    }

  }

  