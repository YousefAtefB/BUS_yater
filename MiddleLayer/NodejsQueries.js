const sql = require('mssql');

var config = {
	server: '127.0.0.1',
	database: 'BusBookingCompany',
	user: 'sa',
	password: '123456',
	port: 55703,
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		instancename: 'SQLEXPRESS',
	},
};

var express = require('express');

var app = express();

app.use(express.json({ limit: '1mb' }));

app.use(express.static('./BUS_yater/Hazem'));

var server = app.listen(8080, () => console.log('listening...'));

var lastResult = [];

app.get('/logIn', (request, response) => {
	//this tamplate is for queries that doesn't have prameters you can replace logIn with appropiate name
	(async (request, response) => {
		try {
			//your logic
			let query = 'SELECT * from Employee'; //the query
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

app.post('/CheckLogIn', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `SELECT * from Employee where SSN=${recivedData.SSN}`; //the query
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
			Set no_currentPassengers =no_currentPassengers +1
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
			Where V.driverId=D.id And D.username = ${recivedData.username}
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

app.post('/SingUp', (request, response) => {
	//this tamplate is for queries that have prameters you can replace CheckLogIn with appropiate name
	(async (request, response) => {
		let recivedData = request.body;
		try {
			//your logic
			let query = `
			Insert Into Passenger
			Values (${recivedData.id},'${recivedData.firstName}','${recivedData.lastName}', '${recivedData.gender}'
			,'${recivedData.phone}','${recivedData.username}','${recivedData.userpassword}',${recivedData.tripid},${recivedData.cardid})			
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


