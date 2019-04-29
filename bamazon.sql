DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bounty Paper Towels', 'Cleaning', '15.99', '500'),  
       ('Pampers Baby Wipes', 'Baby', '2.99', '100'),
       ('Huggies Cruisers size 5', 'Baby', '40.00', '300'),
       ('Orlando Pita Argan Gloss Shampoo', 'Cosmetics', '19.99', '150'),
       ('Orlando Pita Argan Gloss Conditioner', 'Cosmetics', '19.99', '100'),
       ('Lysol', 'Cleaning', '2.99', '300'),
       ('short', 'Clothing', '20.99', '50'),
       ('Loreal Volumenous Mascara', 'Cosmetics', '7.99', '40'),
       ('shirt', 'Clothing', '35.99', '120');


