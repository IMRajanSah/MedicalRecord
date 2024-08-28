select * from test;
insert into test (name) values (1);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

use medial;

CREATE table Agent (
AgentID INT PRIMARY KEY NOT NULL,
Name varchar(50),
Address varchar(50),
MobileNumber int,
dateCreated date
);

create table customer(
MedicalNumber int not null,
CustomerName varchar(50),
Address varchar(50),
MobileNumber varchar(12),
Height varchar(10),
Weight varchar(10),
BloodGroup varchar(10),
ToBePaidByCustomer int,
PaidToCustomer int,
AppliedCountry varchar(50),
CutomerWork varchar(20),
RelatedAgent int,
dateCreated date,
primary key (MedicalNumber),
foreign key (RelatedAgent) references Agent(AgentID)
);

INSERT INTO `medical`.`agent`
(`AgentID`,
`Name`,
`Address`,
`MobileNumber`,
`dateCreated`)
VALUES
(1,'New Ram Janki','Janakpur','9801661153','2024-07-01');

INSERT INTO `medical`.`customer`
(`MedicalNumber`,
`CustomerName`,
`Address`,
`MobileNumber`,
`Height`,
`Weight`,
`BloodGroup`,
`ToBePaidByCustomer`,
`PaidToCustomer`,
`AppliedCountry`,
`CutomerWork`,
`RelatedAgent`,
`dateCreated`)
VALUES
(323,'Nand Kumar Yadav','Janakpur','9812112155','123.2','67.5','AB+',5000,2000,'Qatar','Chef',1,'2024-08-09');



