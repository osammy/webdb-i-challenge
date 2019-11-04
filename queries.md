# Database Queries

## Find all customers with postal code 1010
SELECT * FROM Customers
where postalcode = 1010;

## Find the phone number for the supplier with the id 11
SELECT phone FROM Suppliers
WHERE supplierid=11;

## List first 10 orders ever places, descending by the order date
select * from Orders order by orderdate desc limit 10

## Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers
WHERE CITY = 'London' or City = 'Madrid' or city='Brazil';

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO CUSTOMERS (CustomerName,ContactName,Address,City,PostalCode,Country)
values("The Shire","Bilbo Baggins","1 Hobbit-Hole","Bag End","111","Middle Earth")

## Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE CUSTOMERS 
SET PostalCode = "11122"
WHERE CustomerName = "The Shire"

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT (DISTINCT Cities)
FROM Suppliers

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM SUPPLIERS
WHERE LEN(SupplierName) > 20

