var addemp = document.getElementById('employee-btn'), //add employee button
	empDiv = document.getElementById('employeediv'), //employee div
	empForm = document.getElementById('employeeform'), //employee form
	empType = document.getElementById('emptype'), //employee type select
	empFN = document.getElementById('fname'), //employee first name input
	empLN = document.getElementById('lname'), //employee last name input
	empGender = document.getElementById('gender'), //employee gender select
	empAddress = document.getElementById('address'), //employee address input
	empsalary = document.getElementById('salary'), //employee salary input
	empBTN = document.getElementById('emp-sub'), //employee submit button
	remID = document.getElementById('remID'), //employee removal id
	empRem = document.getElementById('emp-rem'), //employee remove button
	sid, //to create station id input
	vehidmec,
	Type, //some vars to get inputs
	Fname, //
	Lname, //
	Gender, //
	Address, //
	Salary, //
	Stationid, //
	IDrem, //
	addstation = document.getElementById('station-btn'), //add station button
	staDiv = document.getElementById('stationdiv'), //station div
	staForm = document.getElementById('stationform'), //station form
	stalocation = document.getElementById('slocation'), //station location input
	staSubmit = document.getElementById('sta-sub'), //station submit button
	remstation = document.getElementById('remstation'), //station removal id
	stationRem = document.getElementById('sta-rem'), //station remove button
	stationLocation, //station location
	staIdRem, //station id for remove
	addvehicle = document.getElementById('vehicle-btn'), //add vehicle button
	vehicleDiv = document.getElementById('vehiclediv'), //vehicle div
	vehicleForm = document.getElementById('vehicleform'), //vehicle form
	vehmodel = document.getElementById('model'), //vehicle model input
	vehtype = document.getElementById('vehicletype'), //vehicle type input
	passengerNum = document.getElementById('no_pass'), //passenger num input
	tripID = document.getElementById('trip-id'), //trip id input
	staidveh = document.getElementById('station-id'), //stationid for vehcile input
	driverID = document.getElementById('driver-id'), //driver id for vehicle input
	vehicleBTN = document.getElementById('vehicle-sub'), //vehicle submit button
	remvehID = document.getElementById('remvehID'), //vehicle removal id
	remvehBTN = document.getElementById('vehicle-rem'), //employee remove button
	vehicleModel, //
	vehicletype, //
	numofpass, //
	tid, //
	SID, //
	driverid, //
	vid, //
	exista = false,
	existm = false;

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
empType.onchange = function () {
	'use strict';
	if (
		(empType.options[empType.selectedIndex].value == 'Analyst' ||
			empType.options[empType.selectedIndex].value ==
				'Booking Employee') &&
		!exista
	) {
		sid = document.createElement('input');
		sid.setAttribute('placeholder', 'Station ID');
		sid.setAttribute('type', 'number');
		empForm.insertBefore(sid, empForm.childNodes[12]);
		exista = true;
		if (existm) {
			existm = false;
			empForm.removeChild(vehidmec);
		}
	} else if (
		empType.options[empType.selectedIndex].value == 'Mechanic' &&
		!existm
	) {
		vehidmec = document.createElement('input');
		vehidmec.setAttribute('placeholder', 'Vehicle ID');
		vehidmec.setAttribute('type', 'number');
		empForm.insertBefore(vehidmec, empForm.childNodes[12]);
		existm = true;
		if (exista) {
			exista = false;
			empForm.removeChild(sid);
		}
	} else if (empType.options[empType.selectedIndex].value == 'Driver') {
		if (exista) {
			empForm.removeChild(sid);
			exista = false;
		}
		if (existm) {
			empForm.removeChild(vehidmec);
			existm = false;
		}
	}
	Type = empType.options[empType.selectedIndex].value;
};

empGender.onchange = function () {
	'use strict';
	Gender = empGender.options[empGender.selectedIndex].value;
};

addemp.onclick = function () {
	'use strict';
	empDiv.classList.remove('hide');
	staDiv.classList.add('hide');
	vehicleDiv.classList.add('hide');
	document.querySelector('#emp-rem').onclick = async () => {
		try {
			await deleteEmployee(document.querySelector('#remID').value,document.querySelector('#emptype').value);
		} catch {}
		console.log('delete');
	};
	document.querySelector("#emp-sub").onclick = async () => {
		try {
			if (document.querySelector('#emptype').value == 'Driver') {
				await addEmployee(
					document.querySelector('#emptype').value,
					document.querySelector('#fname').value,
					document.querySelector('#lname').value,
					document.querySelector('#gender').value,
					document.querySelector('#address').value,
					document.querySelector('#salary').value,
					" ");
			} else {
				await addEmployee(
					document.querySelector('#emptype').value,
					document.querySelector('#fname').value,
					document.querySelector('#lname').value,
					document.querySelector('#gender').value,
					document.querySelector('#address').value,
					document.querySelector('#salary').value,
					document.querySelector(
						'#employeeform > input[type=number]:nth-child(7)'
					).value
				);
			}
		} catch {}
		console.log('add');
	};
};
empBTN.onclick = function () {
	'use strict';
	Type = empType.options[empType.selectedIndex].value;
	Fname = empFN.value;
	Lname = empLN.value;
	Gender = empGender.options[empGender.selectedIndex].value;
	Address = empAddress.value;
	Salary = empsalary.value;
	Stationid = sid.value;
};

empRem.onclick = function () {
	'use strict';
	IDrem = remID.value;
};
//////////////////////////////////////////////////////////
addstation.onclick = function () {
	'use strict';
	staDiv.classList.remove('hide');
	empDiv.classList.add('hide');
	vehicleDiv.classList.add('hide');
	document.querySelector('#sta-rem').onclick = async () => {
		try {
			await deleteStation(document.querySelector('#remstation').value);
		} catch {}
		console.log('delete');
	};
	document.querySelector('#sta-sub').onclick = async () => {
		try {
			await addStation(document.querySelector('#slocation').value);
		} catch {}
		console.log('add');
	};
};
staSubmit.onclick = function () {
	'use strict';

	stationLocation = stalocation.value;
};
stationRem.onclick = function () {
	'use strict';
	staIdRem = remstation.value;
};
///////////////////////////////////////////////////////////////////
addvehicle.onclick = function () {
	'use strict';
	vehicleDiv.classList.remove('hide');
	staDiv.classList.add('hide');
	empDiv.classList.add('hide');
	document.querySelector('#vehicle-rem').onclick = async () => {
		try {
			await deleteVehicle(document.querySelector('#remvehID').value);
		} catch {}
		console.log('delete');
	};
	document.querySelector("#vehicle-sub").onclick = async () => {
		try {
			await addVehicle(
				document.querySelector('#model').value,
				document.querySelector('#vehicletype').value,
				document.querySelector('#no_pass').value,
				document.querySelector('#trip-id').value,
				document.querySelector('#station-id').value,
				document.querySelector('#driver-id').value
			);
		} catch {}
		console.log('add');
	};
};

async function deleteEmployee(id,type) {
	//data to be sent
	let dataToSend = {
		id: id,
		type: type
	};
	if (parseInt(id) < 0) {
		alert('id must be positive integer');
	} else if (type == '--Employee--'){
		alert('select employee type');
	} 
	else {
		//--------------------------------
		let response = await fetch('http://127.0.0.1:8080/deleteEmployee', {
			method: 'POST',
			body: JSON.stringify(dataToSend),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		let resivedData = await response.json();
		//display the data
		//-------------------------------
	}
}

async function deleteStation(id) {
	//data to be sent
	let dataToSend = {
		id: id, //driver id
    };
    if (parseInt(id) < 0) {
		alert('id must be positive integer');
	}
	//--------------------------------
	else{let response = await fetch('http://127.0.0.1:8080/deleteStation', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
    //-------------------------------
    }
}

async function deleteVehicle(id) {
	//data to be sent
	let dataToSend = {
		id: id,
    };
    if (parseInt(id) < 0) {
		alert('id must be positive integer');
	}
	//--------------------------------
	else{
        let response = await fetch('http://127.0.0.1:8080/deleteVehicle', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
    //-------------------------------
    }
}
async function addVehicle(
	model,
	type,
	maxNumPassenger,
	tripId,
	StationId,
	driverId
) {
	//data to be sent
	let dataToSend = {
		model: model,
		type: type,
		maxNumPassenger: maxNumPassenger,
		tripId: tripId,
		StationId: StationId,
		driverId: driverId,
    };
    if(model==""||type==""||parseInt(maxNumPassenger)<=0||parseInt(tripID)<0||parseInt(StationId)<0||parseInt(driverID)<0)
    {
        alert("Some input are invalid");
    }
	//--------------------------------
	else{let response = await fetch('http://127.0.0.1:8080/addVehicle', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
    //-------------------------------
    }
}

async function addStation(Location) {
	//data to be sent
	let dataToSend = {
		Location: Location,
	};
	//--------------------------------
	let response = await fetch('http://127.0.0.1:8080/addStation', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
	//-------------------------------
}

async function addEmployee(type, firstName, lastName, gender, address, salary,specialId) {
	//data to be sent
	gender = gender[0];
	let dataToSend = {
		type: type,
		firstName: firstName,
		lastName: lastName,
		gender: gender,
		address: address,
		salary: salary,
		specialId: specialId
    };
    if (type == '--Employee--'){
		alert('select employee type');
    } 
    else if (gender == '--GENDER--'){
		alert('select employee gender');
    } 
    else if (firstName==""||lastName==""||address==""||parseInt(salary)<=0||parseInt(specialId)<0){
		alert('Some input are invalid');
    } 
    //--------------------------------
    else{
	let response = await fetch('http://127.0.0.1:8080/addEmployee', {
		method: 'POST',
		body: JSON.stringify(dataToSend),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	let resivedData = await response.json();
	//display the data
    //-------------------------------
    }
}
