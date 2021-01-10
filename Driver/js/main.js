var vehicleId = document.getElementById('idspan'),
	BTN = document.getElementById('btn'),
	arr;
vehicleId.innerHTML = 123456;

/*BTN.onclick = function() {
    "use strict";
    var id = vehicleId.innerText;
    console.log(id);
}*/

async function lastSignedIn() {
	//data to be sent
	//nothing
	//--------------------------------
	let response = await fetch('http://127.0.0.1:8080/lastSignedIn');
	let resivedData = await response.json();
                        if (resivedData.error) {
                            alert('an error occurred');
                            return;
                        }
                        else {
                            alert('the Query is done');
                        }
	//display the data
	arr = resivedData;
	arr = arr[0];
	console.log(resivedData);
	//------------------
}

window.onload = async function DriverVehicle() {
	//data to be sent
	await lastSignedIn();
	let dataToSend = {
		username: arr['username'], //driver username
	};
	//--------------------------------
	let response = await fetch('http://127.0.0.1:8080/DriverVehicle', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
                        if (resivedData.error) {
                            alert('an error occurred');
                            return;
                        }
                        else {
                            alert('the Query is done');
                        }
	//display the data
	arr = resivedData; //EDITED
	arr = arr[0];
	vehicleId.innerHTML = arr['id']; //EDITED
	//-------------------------------
};

BTN.onclick = async function DriverToBeRepaired() {
	//data to be sent
	let dataToSend = {
		id: vehicleId.innerText, //bus id EDITED
	};
	//--------------------------------
	let response = await fetch('http://127.0.0.1:8080/DriverToBeRepaired', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
                        if (resivedData.error) {
                            alert('an error occurred');
                            return;
                        }
                        else {
                            alert('the Query is done');
                        }
	//display the data

	//-------------------------------
};
