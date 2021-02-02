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
// First prompt that breaks it up in add, view, update, delete or exit
function start() {
  inquirer
    .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to do to an employee, role, or department?",
      choices: [
        "Add",
        "View",
        "Update",
        "Delete",
        "All done!"
      ]
    }).then((answers) => {
      // ----------------------SWTICH STATEMENT-----------------
      switch (answers.action) {
        case "Add":
          add();
          break;

        case "View":
          view();
          break;

        case "Update":
         update();
          break;
         
        case "Delete":
         del();
          break;

        case "All done!":
          console.log("Thanks for using the Employee Tracker app!")
          connection.end();
            break;  


      }
    })
}

function add() {
  inquirer
    .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to add?",
      choices: [
        "Add a a role",
        "Add an Employee",
        "Add a Department",  
        "Go back",      
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

        case "Go back":
          start();
          break;

        case "exit":
          start();
          break;
      }
    })
}



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
      connection.query(query, 
       {
        fname: answer.fname,
        lname: answer.lname,
        role_id: answer.employeerole,
        manager: answer.manager,
      });
      console.table(answer)

      viewEmployees();
      start();

    },

    );

}
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
      connection.query(query, function (err, res) {
        if (err) throw err;
      }, {
        title: answer.title,
        salary: answer.salary,

      })
      
      console.table(answer)
      console.log("--------------------------\n")
      viewRoles();

      start();

    },
    );

}

// / ==================ADD Role========================
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What Department would you like to add?"
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
      connection.query(query, {
        title: answer.title,
        salary: answer.salary,

      })
      console.table(answer)
      console.log("--------------------------\n")
      viewDepartments();

      start();

    },
      function (err, res) {
        if (err) throw err;

      }
    );

}


// ----------------------- PROMPT USER--------------
function view() {
  inquirer
    .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to view?",
      choices: [
        "View all roles",
        "View all Employees",
        "View all Departments",
        "Go back",
        "exit"
      ]
    }).then((answers) => {
      // ----------------------SWTICH STATEMENT-----------------
      switch (answers.action) {
    
      case "View all roles":
          viewRoles();
          break;

        case "View all Employees":
          viewEmployees();
          break;

        case "View all Departments":
          viewDepartments();
          break;

          case "Go back":
            start();
            break;  

        case "exit":
          start();
          break;
  
      }
    })
}

// ----------------------------VIEW Employee Roles ------------------------
function viewRoles() {
  console.log("Showing all Roles...\n");
  connection.query("SELECT * FROM employeeRole", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
    // connection.end();
  });
}

// ----------------------------VIEW EMPLOYEE ------------------------
function viewEmployees() {
  console.log("Showing all current employees...\n");
  connection.query("SELECT * FROM newEmployee", function (err, res) {
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
  connection.query("SELECT * FROM Department", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
    // connection.end();
  });
}


// ----------------------------UPDATE func------------------------

function update() {
  inquirer
    .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to update?",
      choices: [
        "Update a role",
        "Update an employee",
        "Update a Department",
        "Go back",
        "exit"
      ]
    }).then((answers) => {
      // ----------------------SWTICH STATEMENT-----------------
      switch (answers.action) {
    
      case "Update a role":
          updateRole();
          break;

        case "Update an employee":
          updateEmployee();
          break;

        case "update a Department":
          updateDepartment();
          break;

          case "Go back":
            start();
            break;  

        case "exit":
          start();
          break;
  
      }
    })
}


// ----------------------------Update a Department ------------------------

function updateDepartment() {
  connection.query('SELECT * FROM Department', function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "update",
      type: "rawlist",
      message: "What department do you want to update?",
      choices: function () {
        let deptUpdate = [];
        for (var i = 0; i < res.length; i++) {
          deptUpdate.push(`${res[i].id} ${res[i].deptname}`);
        }
        return deptUpdate
      },
    }
    ]).then(function (answer) {
      let updatedDepartment = answer.update.split(' ')
      console.log(updatedDepartment)
      connection.query("UPDATE Department SET ? WHERE ? ", updatedDepartment);
      console.table(res);
      console.log("--------------------------\n")
      console.log("Department was removed")
      viewRoles();
    });
    start();
  });
}

function updateEmployee() {
  connection.query('SELECT * FROM newemployee', function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "update",
      type: "rawlist",
      message: "Which employee do you want to update?",
      choices: function () {
        let updateEmployee = [];
        for (var i = 0; i < res.length; i++) {
          updateEmployee.push(`${res[i].id} ${res[i].fname}`);
        }
        return updateEmployee
      },
    }
    ]).then(function (answer) {
      let newEmployee = answer.update.split(' ')

      connection.query("UPDATE newemployee SET ? WHERE ? ", newEmployee);
      console.table(res);
      console.log("--------------------------\n")
      console.log("Employee was updated")
      viewEmployees();
      start();
    });
  
  });
}


function del() {
  inquirer
    .prompt({
      type: 'list',
      name: "action",
      message: "What would you like to Delete?",
      choices: [
        "Delete a role",
        "Delete an Employee",
        "Delete a Department",
        "Go back",
        "exit"
      ]
    }).then((answers) => {
      // ----------------------SWTICH STATEMENT-----------------
      switch (answers.action) {
    
      case "Delete a role":
          deleteRole();
          break;

        case "Delete an Employee":
          deleteEmployees();
          break;

        case "Delete a Department":
          deleteDepartment()
          break;

        case "Go back":
            start();
            break;  

        case "exit":
          start();
          break;
  
      }
    })
}

// ----------------------------Delete a Department ------------------------

function deleteDepartment() {
  connection.query('SELECT * FROM employeeRole', function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "delete",
      type: "rawlist",
      message: "What department do you want to delete",
      choices: function () {
        let deptDelete = [];
        for (var i = 0; i < res.length; i++) {
          deptDelete.push(`${res[i].id} ${res[i].deptname}`);
        }
        return deptDelete
      },
    }
    ]).then(function (answer) {
      let department = answer.delete.split(' ')
      console.log(department)
      connection.query("DELETE FROM employeeRole where id = ? ", department);
      console.table(res);
      console.log("--------------------------\n")
      console.log("Department was removed")
      viewRoles();
    });
    start();
  });
}

// ----------------------------Delete an Employee ------------------------
function deleteEmployees() {
  connection.query('SELECT * FROM newEmployee', function (err, res) {
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
              choiceEmmployeeDel.push(`${res[i].id} ${res[i].fname} ${res[i].lname}`);
            }
            return choiceEmmployeeDel
          },
        }
      ]).then(function (answer) {
        let employee = answer.delete.split(' ')
        console.log(employee)
        console.log(employee[0], employee[2])
        connection.query("DELETE FROM newEmployee where id = ? ", employee[0]);

        console.table(res);
        console.log("--------------------------\n")
        console.log("Employee was successfully removed!")
        viewEmployees();

      });
    start();
  });
}

// ----------------------------Delete an Role ------------------------
function deleteRole() {
  connection.query('SELECT * FROM employeeRole', function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "delete",
          type: "rawlist",
          message: "What Role do you want to delete?",
          choices: function () {
            let choiceRoleDel = [];
            for (var i = 0; i < res.length; i++) {
              choiceRoleDel.push(`${res[i].id} ${res[i].title}`);
            }
            return choiceRoleDel
          },
        }
      ]).then(function (answer) {
        let roledel = answer.delete.split(' ')
        console.log(roledel)
        console.log(roledel[0])
        connection.query("DELETE FROM employeeRole where id = ? ", roledel[0]);

        console.table(res);
        console.log("--------------------------\n")
        console.log("Role was successfully removed!")
        viewEmployees();

      });
    start();
  });
}

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



// function addDepartment() {
//   inquirer.prompt([
//     {
//       name: "deptname",
//       type: "input",
//       message: "What department would you like to add?"
//     }
//   ]).then(function (answer) {
//     console.log("Department Added!");
//     query = "INSERT INTO Department SET ? ";
//     connection.query(query, function 
//       deptname: answer.deptname,
//       function (err, res) {
//         if (err) throw err;
  
//       }
//     );
//     })
//     console.table(answer)
//     console.log("--------------------------\n")
//     viewDepartments();
//     console.log("--------------------------\n")
//     start();

//   },
   
// }





// ----------------------------Delete a Role ------------------------



