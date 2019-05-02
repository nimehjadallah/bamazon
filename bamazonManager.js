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
  selectAction();

});

// Manager picks action they wish to complete.
var selectAction = function() {
	inquirer.prompt([
	{
		type: 'list',
		name: 'action',
		message: 'What would you like to do?',
		choices: [
			"View Products for Sale",
			"View Low Inventory",
			"Add to Inventory",
			"Add New Product"
		]
	}
	]).then(function(answer) {

		// Different functions called based on managers selection
		switch (answer.action) {
		    case "View Products for Sale":
		    	viewProducts();
		      	break;

		    case "View Low Inventory":
		    	viewLowInventory();
		      	break;

		    case "Add to Inventory":
		    	addInventory();
		      	break;

		    case "Add New Product":
		    	addProduct();
		      	break;
		}
	});
};

// Displays list of all available products.
var viewProducts = function() {
	var query = "Select * FROM products";
	connection.query(query, function(err, res) {
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Price: " + res[i].price + " || Quantity: " + res[i].stock_quantity);
		}

		// Lets manager select new action.
		selectAction();
	});
};

