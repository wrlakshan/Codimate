-- Task 1

SELECT Customers.CustomerName, SUM(Orders.OrderAmount) AS TotalSpent
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerName
HAVING COUNT(Orders.OrderID) > 0 ;




