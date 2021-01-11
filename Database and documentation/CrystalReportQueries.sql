use BusBookingCompany
go 

--StationIncome per trip
select S.id,max(V.no_currentPassengers*cost) as TripsMaxIncome,avg(V.no_currentPassengers*cost) as TripsAvgIncome,min(V.no_currentPassengers*cost) as TripsMinIncome
from vehicle V,station S,trip T
where V.stationId = S.id And T.id = V.tripId
group by S.id

--StationTotalIncome
select S.id,sum(V.no_currentPassengers*cost) as ToTalStationIncome
from vehicle V,station S,trip T
where V.stationId = S.id And T.id = V.tripId
group by S.id

--TripIncome
select T.id,T.cost*V.no_currentPassengers As TripIncome
from vehicle V,trip T
where V.tripId = T.id

--TotalSalaryOfEachDepartment
select TABLE_NAME as "Employee_Type",SUM(salary) as "Total_Salary"
from driver,INFORMATION_SCHEMA.TABLES
group by TABLE_NAME
HAving TABLE_NAME='driver'
union
select TABLE_NAME as "Employee_Type",SUM(salary) as "Total_Salary"
from mechanic,INFORMATION_SCHEMA.TABLES
group by TABLE_NAME
HAving TABLE_NAME='mechanic'
union
select TABLE_NAME as "Employee_Type",SUM(salary) as "Total_Salary"
from analyst,INFORMATION_SCHEMA.TABLES
group by TABLE_NAME
HAving TABLE_NAME='analyst'
union
select TABLE_NAME as "Employee_Type",SUM(salary) as "Total_Salary"
from bookingEmployee,INFORMATION_SCHEMA.TABLES
group by TABLE_NAME
HAving TABLE_NAME='bookingEmployee'

--StationTotalVehicleNeedRepair
select S.id,sum(cast(V.needToReapair as int)) As BrokeDown,count(*)-Sum(cast(V.needToReapair as int)) As Fixed
from station S,vehicle V
where S.id = V.stationId
group by S.id

--StationTotalVehicleAssignedToMechanic
select S.id,count(*) As BeingRepaired
from station S,vehicle V,fix F
where S.id = V.stationId And F.vechicleId = V.id
group by S.id
