use BusBookingCompany
Go

--booking employee page 

--get all possible trips
Select *
From trip As T , vehicle As V , station As S
Where V.tripId=T.id And V.stationId = S.id And S.location = 'x' And T.destination = 'y'

Update vehicle
Set no_currentPassengers =no_currentPassengers +1
Where id = 0

Update vehicle
Set no_currentPassengers =no_currentPassengers -1
Where id = 0
-----------------------------------
--driver page

--get the details of the driver's vehicle using the username
Select V.id,V.vehicleType
From vehicle as V,driver as D
Where V.driverId=D.id And D.username = '0'

--update the driver's vehicle to needrepairing by mechanics
Update vehicle
Set needToReapair = 1
From vehicle
Where id=0

--sign in page


--sign up page

--add new passenger account
Insert Into Passenger
Values (123456,'Firstname','Lastname', 'm','phone','username','userpassword',123,123)
--(id,'Firstname','Lastname', 'm','phone','username','userpassword',tripid,carid)

--mechanics center page

--get all vehicles assigned to mechanic(username) that need repair
Select V.id,V.vehicleType,V.driverId
From  vehicle As V,mechanic As M,fix As F
Where F.mechanicId = M.id And F.vechicleId =  V.id And V.needToReapair = 1 And M.username = 'vbins' 

--update the vehicle if it's checked by the mechanic
Update vehicle
Set needToReapair = 0
Where id = 725864

--delete the relation if it's checked by the mechanic
Delete fix
from vehicle As V,mechanic As M,fix As F
where F.mechanicId = M.id And F.vechicleId =  V.id And V.needToReapair = 0 And M.username = 'vbins'



