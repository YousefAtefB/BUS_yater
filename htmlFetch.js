async function BookingEmployeeSearch() {
  //data to be sent
  let dataToSend = {
    location: "tokyo", //source
    destination: "pyramids", //destination
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/BookingEmployeeSearch", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function BookingEmployeeBook() {
  //data to be sent
  let dataToSend = {
    id: 11, //bus id
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/BookingEmployeeBook", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function BookingEmployeeCancel() {
  //data to be sent
  let dataToSend = {
    id: 11, //bus id
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/BookingEmployeeCancel", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function DriverVehicle() {
  //data to be sent
  let dataToSend = {
    username: "m16", //driver username
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/DriverVehicle", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function DriverToBeRepaired() {
  //data to be sent
  let dataToSend = {
    id: 11, //bus id
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/DriverToBeRepaired", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function SignUp() {
  //data to be sent
  let dataToSend = {
    id: 11,
    firstName: "m",
    lastName: "16",
    gender: "M",
    phone: "11",
    username: "m16",
    userpassword: "***",
    tripid: 11,
    cardid: 11,
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/SignUp", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function sendLogInInfo() {
  //data to be sent
  let dataToSend = {
    username: "awfafefa",
    userpassword: "wadwawqe2",
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/CheckLogIn", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}
async function mechanicFixedTheVechile() {
  //data to be sent
  let dataToSend = {
    id: 121211241, //id of the bus that fixed
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/mechanicFixedTheVechile", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function vechilesThatMechanicFixes() {
  //data to be sent
  let dataToSend = {
    id: 121211241, //id of the mechani
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/mechanicAssigendVechile", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}

async function lastSignedIn() {
  //data to be sent
  //nothing
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/lastSignedIn");
  let resivedData = await response.json();
                        if (resivedData.error) {
                            alert('an error occurred');
                            return;
                        }
                        else {
                            alert('the Query is done');
                        }
  //display the data
  console.log(resivedData);
  //------------------
}

async function allStations() {
  //data to be sent
  //nothing
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/allStations");
  let resivedData = await response.json();
                        if (resivedData.error) {
                            alert('an error occurred');
                            return;
                        }
                        else {
                            alert('the Query is done');
                        }
  //display the data
  console.log(resivedData);
  //------------------
}

async function allTripsOfStation() {
  //data to be sent
  let dataToSend = {
    id: 121211241, //id of the station
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/allTripsOfStation", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
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
  console.log(resivedData);
  //-------------------------------
}
