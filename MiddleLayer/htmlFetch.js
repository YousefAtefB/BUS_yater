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
