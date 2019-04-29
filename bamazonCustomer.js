// var inquirer = require('inquirer');
var mysql = require("mysql");

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "kulmloveJ@89",
	database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // start();
  });

  function start(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
    
      console.log('_.~"~._.~"~._.~Welcome to Bamazon~._.~"~._.~"~._')
      console.log('----------------------------------------------------------------------------------------------------')
    
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].item_id + " || " + "Product: " + res[i].product_name + " || " + "Department: " + res[i].department_name + " || " + "Price: " + res[i].price + " || " + "Quantity: " + res[i].stock_quantity);
        console.log('--------------------------------------------------------------------------------------------------')
      }
    })
    }

    start();