var vehicleId=document.getElementById("idspan"),
    BTN=document.getElementById("btn"),
	arr;
vehicleId.innerHTML=123456;


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
	//display the data
	arr=resivedData;
	//------------------
}
lastSignedIn();

async function DriverVehicle() {
	//data to be sent
	let dataToSend = {
		username: arr["username"]   //driver username
	};
	//--------------------------------
	let response = await fetch(
		'http://127.0.0.1:8080/DriverVehicle',
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
    arr=resivedData;                      //EDITED
	vehicleId.innerHTML=arr["id"];         //EDITED
	//-------------------------------
}

DriverVehicle();

BTN.onclick =async function DriverToBeRepaired() {
	//data to be sent
	let dataToSend = {
		id : vehicleId.innerText  //bus id EDITED
	};
	//--------------------------------
	let response = await fetch(
		'http://127.0.0.1:8080/DriverToBeRepaired',
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
}*/