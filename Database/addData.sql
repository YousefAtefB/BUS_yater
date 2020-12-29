Go
use BusBookingCompany

insert into station
values
	(046878, 'california'),
	(277286, 'cairo')

insert into bookingEmployee
values
	(300625, 'Monserrat', 'Kautzer', 'm', '30434 Johns Square Apt. 945', 1000, 'vella19', 'fj80u6FCaJ', 046878)
insert into analyst
values
	(317883, 'Britney', 'Flatley', 'f', '3367 Rollin Skyway', 2000, 'mayeschowalter', 'jXZiKUMpWb', 046878)
insert into paymentCard
values
	(322157, 100)
insert into trip
values
	(601871,'tokyo', 'florida', '2020-10-10', 3, 100)
insert into Passenger
values
	(540413, 'Stan', 'Kris', 'm', '+201109338669', 'effertzprice', 'fAI9P2ZE4h', 601871, 322157)
insert into driver
values
	(011708, 'Drake', 'Kunze', 'm', '3352 Hoppe Ville', 1200, 'cynthia12', 'fBUu8Kl7o', 3.5)
insert into mechanic
values
	(204796, 'Tony', 'Klocko', 'm', '27790 Kareem Dale Apt. 881', 1000, 'vbins', 'PkuEMuyKv')
insert into vehicle
values
	(725864, 'mercides', 'super jet', 0, 10, 30, 601871, 046878, 011708)
insert into fix
values
	(725864, 204796)