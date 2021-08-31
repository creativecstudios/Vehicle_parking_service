select                 -> select * from tablename;
select                 -> select id,customername form tablename;
distinct               -> select distinct id from tablename;
distinct               -> select distinct customername from tablename;
count  				   -> select count(country) from tablename; 					
count + distinct       -> select count(distinct country) from tablename;
where                  -> select customername from tablename where customername = 'premkumar'; 
where Not equal        -> select * from tablename where id <> 2;	<> == !=
between				   -> select * from tablename where id between 5 and 10;
s% first occurance     -> select * from tablename where customername like 's%';
%s last occurance 	   -> select * from tablename where customername like '%s';
in 					   -> select vehicleno from tablename where state in ('tamilnadu','kerala');
and					   -> select * from tablename where countryname = 'asia' and city = 'salem';
or 					   -> select * from tablename where countryname = 'asia' or city = 'salem';
not 				   -> select * from tablename where not countryname = 'afganistan';
order by 			   -> select * from tablename order by country;
desc 				   -> select * from tablename order by country desc;
asc,desc		       -> select * from tablename order by country desc, customername asc;
insert into			   -> insert into tablename(columnname1,..) values ('salem','india');
is null				   -> select * from tablename where address is null;
is not null			   -> select * from tablename where address is not null;
update				   -> update tablename set name = ?, country = ?, where id = ?;
delete				   -> delete from tablename where id = ?;
top					   -> select top * 5 from tablename;
limit				   -> select * from tablename limit 3;
fetch				   -> select * from tablename fetch first 3 rows only;
top percent      	   -> select top 30 percent * from tablename;
min				       -> select min(totalcost) from tablename;
max  			       -> select max(totaohours) as hours from tablename;
avg				       -> select avg(totalcost) from tablename;
sum					   -> select sum(totalcost) from tablename;
select at any pos	   -> select * from tablename where customername like '%pr%';
start with end with    -> select * from tablename where customername like 'p%r';
second occurance       -> select * from tablename where customername like '_a%';
with length       	   -> select * from tablename where customername like 'a__%';
* for 0 || more occcu  -> select * form tablename where customername like 'a*';
? for single occurance -> select * from tablename where customername like 'h?t';
'#' for numeric single -> select * from tablename where totalhours like '4#9';
[]                     -> select * from tablename where customername like '[ab]%';
in -> multiple where   -> select customername from tablename where (select city form tablename where state = 'tamilnadu');
inner join             -> select order.orderid, customers.customersname, order.orderdate from order inner join customers on customers.customerid = orders.orderid;
inner join multiple    -> select order.orderid, customer.customername, shippers.shippersname from ((orders inner join customers on order.orderid = customers.orderid) inner join shippers on orders.shipersid = shipers.shiperid);
left join              -> select customers.customername, orders.orderid from customers left join orders on customers.customerid = orders.orderid;
right join 			   -> select customers.customername, orders.orderid from customers right join orders on customers.customerid = orders.orderid;
full outer join        -> select customers.customername, orders.orderid from customers full join orders on customers.customerid = orders.orderid;
self join              -> select A.empname as cusname1, B.empname as manager from employee A,employee B where A.empid = B.manid;
self join              -> select a.customername as cus1, b.customername as cus2 from customer a,customer b where a.cityid <> b.cityid and a.doj = b.doj order by a.customername;
where / having         -> select max(salary) from employee having empid > 5;  aggregate functions -> use having and not where -> aggregate functions are max,avg,min,count,avg.
union                  -> select * from customer union select * from shops where customer.id = shops.id;  -> union does not allow duplicate values must have equal columns in both tables. not necessary to have same columnname
union all              -> select * from customer union all select * from shops where customer.id = shops.id
or                     -> select * from customer where city ='salem' or city = 'bangalore' or city = 'hyderabad';
in 				       -> select * from customer where city in ('salem','bagalore','hyderabad'); or select * from customer where city in (select * from tablename);
exists true or false   -> select * from customer where exists (customer.id = ?);
group by               -> select employeename, count(status) from employee group by status; not able to use where after using group by use having instead of that. used for aggregare functions
join / subquery        -> join is faster than subquery subquery in the sence -> select * from customer where (select * from tablename) -> slower whereas in join select customername,employeename from customer join employee on customers.id = employee.id;
union / join           -> union combines rows. join combines columns
in                     -> equal to any member in the list 
any                    -> compare value to each value in the list. each means until it reaches true once reached it gets stopped salary > any(col1,col2,col3) represents any of the columns 
all                    -> compare value to every value in the list. salary > all(col1,col2,col3); represents all of the columns
select into            -> select col1, col2, col3 into newtable from oldtable where condition; -> insert the values from oldtable to newtable
insert into select     -> insert into table2 select * from table1; -> insert the values from onetable to other table
case                   -> select orderid, customerid 
						  	case 
						  		when orderdate > now then 'stmt'
						  		when customerid > 500 then 'stmt'
						  		else 'stmt'
						  		end as somename 
						  		from tablename




