const inquirer = require("inquirer");
const mysql = require("mysql");

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
connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  //   call prompts and start inquirer


//   department

// role 
 
// employee