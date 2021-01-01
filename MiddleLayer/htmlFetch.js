async function sendLogInInfo() {
	//data to be sent
	let dataToSend = {
		username: 'awfafefa',
		userpassword: 'wadwawqe2',
	};
	//--------------------------------
	let response = await fetch('http://127.0.0.1:8080/CheckLogIn', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
	console.log(resivedData);
	//-------------------------------
}
async function mechanicFixedTheVechile() {
	//data to be sent
	let dataToSend = {
		id: 121211241, //id of the bus that fixed
	};
	//--------------------------------
	let response = await fetch(
		'http://127.0.0.1:8080/mechanicFixedTheVechile',
		{
			method: 'POST',
			body: JSON.stringify(dataToSend),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	let resivedData = await response.json();
	//display the data
	console.log(resivedData);
	//-------------------------------
}

async function vechilesThatMechanicFixes() {
	//data to be sent
	let dataToSend = {
		id: 121211241, //id of the mechani
	};
	//--------------------------------
	let response = await fetch(
		'http://127.0.0.1:8080/mechanicAssigendVechile',
		{
			method: 'POST',
			body: JSON.stringify(dataToSend),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	let resivedData = await response.json();
	//display the data
	console.log(resivedData);
	//-------------------------------
}
