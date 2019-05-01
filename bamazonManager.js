// The manager module is part of bamazon.
// Managers can view products for sale.
// They can view low inventory.
// They can add to inventory.
// Managers can also add new products.

// Required node modules.
var mysql = require('mysql');
var inquirer = require('inquirer');

// Connects to the database.
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Root is default username.
  user: 'root',
  // Password is empty string.
  password: 'kulmloveJ@89',
  database: 'bamazon'
});

// If connection doesn't work, throws error, else...
connection.connect(function(err) {
    // console.log("connected as id " + connection.threadId + "\n");

  if (err) throw err;

  // Lets manager pick action.
//   selectAction();

});
