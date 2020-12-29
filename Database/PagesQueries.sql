use BusBookingCompany
Go

--booking employee page 

--get all possible trips
Select *
From trip
Where source = 'tokyo' and destination = 'florida'

Update vehicle
Set no_passengers = no_passengers + 1
Where id = 725864

Update vehicle
Set no_passengers = no_passengers - 1
Where id = 725864
-----------------------------------
--driver page

--get the details of the driver's vehicle using the username
Select V.id,V.vehicleType
From vehicle as V,driver as D
Where V.driverId=D.id And D.username = 'cynthia12'

--update the driver's vehicle to needrepairing by mechanics
Update vehicle
Set needToReapair = 1
From vehicle as V,driver as D
Where V.driverId=D.id And D.username = 'cynthia12'

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



