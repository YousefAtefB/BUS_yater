//lt --port 9000 --subdomain saadsqlserver
const sql = require('mssql');

var config = {
	server: '127.0.0.1',
	database: 'BusBookingCompany',
	user: 'medo',
	password: '12345678',
	port: 58737,
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		instancename: 'SQLEXPRESS',
	},
};

var express = require('express');

var app = express();

app.use(express.json({ limit: '1mb' }));

app.use(express.static('./'));

var server = app.listen(8080, () => console.log('listening...'));

var lastResult = [];

app.post('/BookingEmployeeSearch', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `Select *
			From trip As T , vehicle As V , station As S
			Where V.tripId=T.id And V.stationId = S.id And S.location = '${recivedData.location}' And T.destination = 
			'${recivedData.destination}'`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/BookingEmployeeBook', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
			Update vehicle
			Set no_currentPassengers = no_currentPassengers + 1
			Where id = ${recivedData.id}
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/BookingEmployeeCancel', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
			Update vehicle
			Set no_currentPassengers =no_currentPassengers -1
			Where id = ${recivedData.id}
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/DriverVehicle', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
			Select V.id,V.vehicleType
			From vehicle as V,driver as D
			Where V.driverId=D.id And D.username = '${recivedData.username}'
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/DriverToBeRepaired', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
			Update vehicle
			Set needToReapair = 1
			From vehicle
			Where id=${recivedData.id}			
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

function getRandomInt(min, max) {
	//including min not including max
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
function getRandomId() {
	//9 digits
	temp = '';
	i = 0;
	while (i < 9) {
		temp += getRandomInt(0, 10);
		i++;
	}
	return parseInt(temp);
}
app.post('/SignUp', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			tripid='NULL';
			cardid=getRandomId();
			let query = `
			Insert Into paymentCard
			Values (${cardid},0)			
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);

			query = `
			Insert Into Passenger
			Values (${recivedData.id},'${recivedData.firstName}','${recivedData.lastName}', '${recivedData.gender}'
			,'${recivedData.phone}','${recivedData.username}','${recivedData.userpassword}',${tripid},${cardid})			
			`; //the query
			sqlServer = await sql.connect(config);
			queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});


app.post('/mechanicFixedTheVechile', (request, response) => {
	(async (request, response) => {
		let recivedData = request.body;
		try {
			let query = `
				Update vehicle
				Set needToReapair = 0
				Where id = ${recivedData.id}`;
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			query = `
				Delete fix
				from vehicle As V,mechanic As M,fix As F
				where F.mechanicId = M.id And F.vechicleId =  V.id And V.needToReapair = 0`;
			lqueryResult = await sqlServer.request().query(query);
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/mechanicAssigendVechile', (request, response) => {
	(async (request, response) => {
		let recivedData = request.body;
		try {
			let query = `
			Select V.id,V.vehicleType
			From  vehicle As V,mechanic As M,fix As F
			Where F.mechanicId = M.id And F.vechicleId =  V.id And V.needToReapair = 1 And M.id =${recivedData.id}`;
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/CheckLogIn', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			let query = `SELECT * from Passenger 
			where username='${recivedData.username}' and userpassword='${recivedData.userpassword}'`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			lastResult = queryResult.recordsets[0];
			if (lastResult.length == 0) {
				query = `SELECT * from bookingEmployee 
				where username='${recivedData.username}' and userpassword='${recivedData.userpassword}'`; //the query
				queryResult = await sqlServer.request().query(query);
				lastResult = queryResult.recordsets[0];
				if (lastResult.length == 0) {
					query = `SELECT * from analyst 
					where username='${recivedData.username}' and userpassword='${recivedData.userpassword}'`; //the query
					queryResult = await sqlServer.request().query(query);
					lastResult = queryResult.recordsets[0];
					if (lastResult.length == 0) {
						if (lastResult.length == 0) {
							query = `SELECT * from driver 
							where username='${recivedData.username}' and userpassword='${recivedData.userpassword}'`; //the query
							queryResult = await sqlServer
								.request()
								.query(query);
							lastResult = queryResult.recordsets[0];
							if (lastResult.length == 0) {
								query = `SELECT * from mechanic 
								where username='${recivedData.username}' and userpassword='${recivedData.userpassword}'`; //the query
								queryResult = await sqlServer
									.request()
									.query(query);
								lastResult = queryResult.recordsets[0];
								if (lastResult.length != 0) {
									lastResult[1] = 'mechanic';
								}
								response.send(lastResult);
								return;
							}
							lastResult[1] = 'driver';
							response.send(lastResult);
							return;
						}
					}
					lastResult[1] = 'analyst';
					response.send(lastResult);
					return;
				}
				lastResult[1] = 'bookingEmployee';
				response.send(lastResult);
				return;
			}
			lastResult[1] = 'passenger';
			response.send(lastResult);
			return;
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});


app.get('/lastSignedIn', (request, response) => {
	(async (request, response) => {
		try {
			response.send(lastResult);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.get('/allStations', (request, response) => {
	(async (request, response) => {
		try {
			let query = `
			Select DISTINCT *
			From station
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});


app.post('/allTripsOfStation', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `Select DISTINCT *
			From trip As T , vehicle As V , station As S
			Where V.tripId=T.id And V.stationId = S.id And S.id = ${recivedData.id}
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/allDriversOfStation', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `Select DISTINCT D.id, D.rate, D.salary
			From driver As D , vehicle As V , station As S
			Where D.id = V.driverId And V.stationId = S.id And S.id = ${recivedData.id}
			`; //the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});

app.post('/updateDriverSalary', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
				Update vehicle
				Set salary = ${recivedData.salary}
				Where id = ${recivedData.id}`;//the query
			let sqlServer = await sql.connect(config);
			let queryResult = await sqlServer.request().query(query);
			//----------------------------------
			lastResult = queryResult.recordsets[0];
			response.send(queryResult.recordsets[0]);
		} catch (error) {
			console.log(error);
		}
	})(request, response);
});