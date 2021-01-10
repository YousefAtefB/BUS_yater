var searchButton=document.getElementById('s-button'),
    searchDiv=document.getElementById('search'),
    Trips=document.getElementById('trips'),
    trip = document.getElementById('tripspan'),

    from = document.getElementById('from'),
    to = document.getElementById('to'),

    myTrips=document.getElementById('my-trips'),
    tripid,
    Money=document.getElementById('money'),   ///////////money  
    bookedTrips=document.getElementById('bookedtrips'),
    cancelBTN,
    arr,
    fromCheck=true,
    toCheck=true,
    passengerid,
    cardId,
    myTripsArr=[];
    window.onload=lastSignedIn(0)
    async function lastSignedIn(par) {
    if(par==0){

    
    //nothing
    //--------------------------------
    //let response = await fetch('http://127.0.0.1:8080/lastSignedIn');
    //let resivedData = await response.json();
    //arr = resivedData;
    //passengerid = arr[0].id;
    //cardId = arr[0].cardId;
    passengerid = 503179344;
    //console.log(resivedData);
    //------------------
  }
  else{
  }
  document.querySelector("#money").innerHTML="";
  bookedTrips.innerHTML="";

    await myCard();
    await CardValue();
    await myTrip();
  for(let i=0;i<myTripsArr.length;i++)
  {
      var mydiv=document.createElement('div');

      var myid=document.createElement('p');
      myid.innerHTML="Bus id: "+myTripsArr[i].id[1];
      mydiv.appendChild(myid);

      var myid=document.createElement('p');
      myid.innerHTML="date: "+myTripsArr[i].startingDate.substr(0, 10);
      mydiv.appendChild(myid);
  
      var myid=document.createElement('p');
      myid.innerHTML="to: "+myTripsArr[i].destination;
      mydiv.appendChild(myid);

      cancelBTN=document.createElement('button');
      cancelBTN.innerHTML='cancel';
      cancelBTN.classList.add('c-button');
      cancelBTN.addEventListener('click',async () =>{
        await BookingEmployeeCancel(myTripsArr[i].id[1]);
        await removeThePassenger(myTripsArr[i].tripId[0],cardId);
        lastSignedIn(1);
      });
      mydiv.appendChild(cancelBTN);

      bookedTrips.appendChild(mydiv);
    }
  }

  async function allStations() {
    //data to be sent
    //nothing
    //--------------------------------
    let response = await fetch('http://127.0.0.1:8080/allStations');
    let resivedData = await response.json();
    //display the data
    arr=resivedData;
    console.log(resivedData);
    //------------------
  }
  
  async function allTripsOfStation() {
    //data to be sent
    let dataToSend = {
      id: arr[from.selectedIndex].id, //id of the station
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
    //display the data
    arr=resivedData
    console.log(resivedData);
    //-------------------------------
  }
  async function myCard(){
        //data to be sent
        let dataToSend = {
          id: passengerid,
        };
        //--------------------------------
        let response = await fetch("http://127.0.0.1:8080/myCard", {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let resivedData = await response.json();
        //display the data
        cardId=resivedData[0].cardId;
        console.log(resivedData);
  }
  async function CardValue() {
    //data to be sent
    let dataToSend = {
      id: cardId, 
    };
    //--------------------------------
    let response = await fetch("http://127.0.0.1:8080/CardValue", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let resivedData = await response.json();
    //display the data
    document.querySelector("#money").innerText=resivedData[0].moneyAmount;
    console.log(resivedData);
    //-------------------------------
  }

  async function myTrip() {
    //data to be sent
    let dataToSend = {
      id: passengerid,
    };
    //--------------------------------
    let response = await fetch("http://127.0.0.1:8080/myTrip", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let resivedData = await response.json();
    //display the data
    myTripsArr=resivedData;
    console.log(resivedData);
    //-------------------------------
  }


from.onclick=async function ()
{
  if(fromCheck){
    from.innerHTML = '';
    to.innerHTML = '';
  }
  await allStations();
  for(var i=0;i<arr.length;i++)
  {
    let child = document.createElement("option");
    child.value =arr[i].location;
    child.innerText=arr[i].location;
    from.appendChild(child)
  }

  if(toCheck){
    to.innerHTML = '';
  }
  await allStations();
  await allTripsOfStation();

  for(var i=0;i<arr.length;i++)
  {
    let child = document.createElement("option");
    child.value =arr[i].destination;
    child.innerText=arr[i].destination;
    to.appendChild(child)
  }
  fromCheck=!fromCheck;
}

to.onclick=async function (){
  toCheck=!toCheck;
}


async function BookingEmployeeSearch() {
  //data to be sent
  let dataToSend = {
      location: from.options[from.selectedIndex].value, //source
      destination: to.options[to.selectedIndex].value, //destination
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
  //display the data
  arr=resivedData;
  //-------------------------------
}

searchButton.onclick = async function(){
      "use strict";
      Trips.innerHTML = '';
      Trips.classList.remove('hide');
      await BookingEmployeeSearch();
      for(var i=0;i<arr.length;i++)
      {
          var t=document.createElement('div');
          t.classList.add('t-info');
          var tid=document.createElement('p');
          var tidspan=document.createElement('span');
          tid.innerHTML='id:';
          tidspan.innerHTML=arr[i]['id'][0];
          tid.classList.add('t-infop');
          tidspan.classList.add('tripsspan');
          t.appendChild(tid);
          t.appendChild(tidspan);
          

          var tdes=document.createElement('p');
          tdes.innerHTML='Destination: ' +to.options[to.selectedIndex].value ;
          tdes.classList.add('t-infop');
          t.appendChild(tdes);

          var tdate=document.createElement('p');
          tdate.innerHTML='date: '+arr[i]['startingDate'];
          tdate.classList.add('t-infop');
          t.appendChild(tdate);

          var tdur=document.createElement('p');
          tdur.innerHTML='Duration:'+ arr[i]['duration'] ;
          tdur.classList.add('t-infop');
          t.appendChild(tdur);

          var tcost=document.createElement('p');
          tcost.innerHTML='Cost: ' +arr[i]['cost'];
          tcost.classList.add('t-infop');
          t.appendChild(tcost);

          var bookBTN=document.createElement('button');
          bookBTN.innerHTML='Book';
          bookBTN.classList.add('b-button');
          t.appendChild(bookBTN);

          Trips.appendChild(t);

      }
      addButtonAction()
};

async function BookingEmployeeBook(busId) {
  //data to be sent
  let dataToSend = {
    id: busId, //bus id
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
  //display the data
  console.log(resivedData);
  //-------------------------------
}

async function addThePassenger(tripid,cardId,value) {
  value=parseInt(value);
  console.log(value);
  console.log(parseInt(document.querySelector("#money").innerText));
  if(parseInt(document.querySelector("#money").innerText)-value < 0){
    alert("don't have enough money");
    return;
  }
  //data to be sent
  let dataToSend = {
    passengerId: passengerid,
    tripId: tripid,
    cardId:cardId
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/addThePassenger", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let resivedData = await response.json();
  //display the data
  console.log(resivedData);
  //-------------------------------
}

async function removeThePassenger(tripid,cardId) {
  //data to be sent
  let dataToSend = {
    passengerId: passengerid,
    tripId: tripid,
    cardId: cardId
  };
  //--------------------------------
  let response = await fetch("http://127.0.0.1:8080/removeThePassenger", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let resivedData = await response.json();
  //display the data
  console.log(resivedData);
  //-------------------------------
}


async function BookingEmployeeCancel(id) {
  //data to be sent
  let dataToSend = {
    id: id, //bus id
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
  //display the data
  console.log(resivedData);
  //-------------------------------
}

async function addButtonAction()
{
  for(let i=0;i<arr.length;i++)
  {
      document.querySelector("#trips").children[i].children[6].onclick=async function(){
        try{
          await BookingEmployeeBook(document.querySelector("#trips").children[i].children[1].innerText);
        }
        catch{
        }
        try{
          addThePassenger(document.querySelector("#trips").children[i].children[1].innerText,cardId,document.querySelector("#trips").children[0].children[5].innerText.slice(6));
        }
        catch{
        }
        Trips.classList.add('hide');
        lastSignedIn(1);
      }
  }

      
  for(let i=0;i<arr.length;i++)
  {
      document.querySelector("#my-trips").children[i].children[2].onclick=async function(){
          try{
            await BookingEmployeeCancel(document.querySelector("#bookedtrips").children[i].children[1].innerText);
          }
          catch{
          }
          try{
            await removeThePassenger(document.querySelector("#bookedtripss").children[i].children[1].innerText)
          }
          catch{
          }
          Trips.classList.add('hide');

      }
  }
}

/*window.onload=function()
{
  "use strict";
  for(let i=0;i<myTripsArr.length;i++)
  {
      var mydiv=document.createElement('div');
      bookedTrips.appendChild('mydiv');
      var myid=document.createElement('p');

      myid.innerHTML="id: "+arr[i][id];
      mydiv.appendChild(myid);

  }

}*/
