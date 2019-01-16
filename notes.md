# using knex

- install knex globally
- knex init || npx knex init
- remove staging and production from knexfile.js for now
- add useNullAsDefault key to knexfile.js

# 1-16-19 joins]

- SELECT \*
  FROM Orders JOIN Customers
  ON Orders.CustomerId = Customers.CustomerId;

- SELECT o.OrderId, o.OrderDate, c.CustomerName as Customer, c.Country
  FROM Orders as o JOIN Customers as c
  ON o.CustomerId = c.CustomerId;

- SELECT o.OrderId, o.OrderDate, c.\*
  FROM Orders as o JOIN Customers as c
  ON o.CustomerId = c.CustomerId;

- SELECT \* FROM [Orders]
  JOIN OrderDetails
  ON Orders.OrderID= OrderDetails.OrderID
  WHERE Orders.OrderId = 10252

- SELECT Orders._, OrderDetails._, Products.\* FROM Orders
  JOIN OrderDetails
  ON Orders.OrderID= OrderDetails.OrderID
  JOIN Products
  ON Products.ProductID= OrderDetails.ProductID
  WHERE Orders.OrderId = 10252

- select o.orderId as Id, p.ProductName, d.Quantity, p.Unit
  from orders as o
  join orderDetails as d on o.orderId = d.orderId
  join products as p on d.productId = p.productId
  where o.orderId = 10252
