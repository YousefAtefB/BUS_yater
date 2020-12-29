create database BusBookingCompany
Go
use BusBookingCompany

create table station
(
	id int NOT NULL,
	location varchar(50),
	Primary key(id),
)

create table bookingEmployee
(
	id int NOT NULL,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	gender char Not null,
	homeAddress varchar(50),
	salary int ,
	username varchar(30) NOT NULL,
	userpassword varchar(30) NOT NULL,
	stationId int,
	Primary key(id),
	Foreign key (stationId) references station (id)
	ON DELETE SET NULL
	ON UPDATE CASCADE,
)

create table analyst
(
	id int NOT NULL,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	gender char NOT NULL,
	homehomeAddress varchar(50),
	salary int,
	username varchar(30) NOT NULL,
	userpassword varchar(30)NOT NULL,
	stationId int,
	Primary key(id),
	Foreign key (stationId) references station (id)
	ON DELETE set NULL 
	ON UPDATE CASCADE,
)

create table paymentCard
(
	id int not null,
	moneyAmount int not null,
	primary key (id)
)

create table trip
(
	id int,
	source varchar(50) not null,
	destination varchar(50) not null,
	startingDate date,
	duration int not null,
	cost int not null,
	primary key (id),
)

create table Passenger
(
	id int not null,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	gender char Not null,
	phone varchar(50),
	username varchar(50) not null,
	userpassword varchar(50) not null ,
	tripId int ,
	cardId int not null,
	primary key(id),
	Foreign key(tripId) references trip
	ON DELETE set NULL
	on UPDATE cascade,
	Foreign key (cardId) references paymentCard
	ON DELETE cascade
	on UPDATE cascade,
)

create table driver
(
	id int not null,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	gender char Not null,
	homeAddress varchar(50),
	salary int,
	username varchar(50) not null,
	userpassword varchar(50) not null,
	rate float,
	primary key (id),
)

create table mechanic
(
	id int not null ,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	gender char Not null,
	homeAddress varchar(50),
	salary int,
	username varchar(50) not null,
	userpassword varchar(50) not null,
	primary key (id),
)


create table vehicle
(
	id int not null,
	model varchar(50) not null,
	vehicleType varchar(50) not null,
	needToReapair BIT not null,
	no_currentPassengers int,
	no_passengers int not null,
	tripId int,
	stationId int,
	driverId int,
	primary key (id),
	Foreign key (tripId) references trip 
	ON DELETE set NULL
	on UPDATE cascade,
	Foreign key (stationId) references station
	ON DELETE set NULL
	on UPDATE CASCADE,
	Foreign key (driverId) references driver
	ON DELETE set NULL
	on UPDATE cascade,
)

create table fix
(
	vechicleId int,
	mechanicId int,
	primary key (vechicleId,mechanicId),
	Foreign key (vechicleId) references vehicle
	ON DELETE cascade
	on UPDATE cascade,
	Foreign key (mechanicId) references mechanic
	ON DELETE cascade
	on UPDATE cascade,
)