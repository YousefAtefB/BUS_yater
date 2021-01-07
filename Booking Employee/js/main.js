var searchButton=document.getElementById('s-button'),
    searchDiv=document.getElementById('search'),
    Trips=document.getElementById('trips'),
    trip = document.getElementById('tripspan'),

    from = document.getElementById('from'),
    to = document.getElementById('to'),
    fromCheck=true,
    toCheck=true,
    tripid,
    arr;

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

  from.onclick=async function (){
  if(fromCheck){
    from.innerHTML = '';
    to.innerHTML = '';
  }
  await allStations();
  for(var i=0;i<arr.length;i++){
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
  for(var i=0;i<arr.length;i++){
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
        searchDiv.classList.remove('hide');
        await BookingEmployeeSearch();
        for(var i=0;i<arr.length;i++)
        {
            var t=document.createElement('div');
            t.classList.add('t-info');
            var tid=document.createElement('p');
            var tidspan=document.createElement('span');
            tid.innerHTML='id:';
            tidspan.innerHTML=arr[i]['id'][1];
            tid.classList.add('t-infop');
            tidspan.classList.add('tripsspan');
           // tidspan.setAttribute(data-id,tidspan.innerText);
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

            var cancelBTN=document.createElement('button');
            cancelBTN.innerHTML='cancel';
            cancelBTN.classList.add('c-button');
            t.appendChild(cancelBTN);

            Trips.appendChild(t);

        }
        addButtonAction()
};

async function BookingEmployeeBook(tripid) {
    //data to be sent
    let dataToSend = {
      id: tripid, //bus id
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



async function BookingEmployeeCancel(tripid) {
    //data to be sent
    let dataToSend = {
      id: tripid, //bus id
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

  function addButtonAction(){
  for(let i=0;i<arr.length;i++)
  {
      document.querySelector("#trips").children[i].children[6].onclick=async function(){
        try{
          await BookingEmployeeBook(document.querySelector("#trips").children[i].children[1].innerText);
        }
        catch{
        }
        searchDiv.classList.add('hide');   
      }
  }
  for(let i=0;i<arr.length;i++)
  {
      document.querySelector("#trips").children[i].children[7].onclick=async function(){
          try{
            await BookingEmployeeCancel(document.querySelector("#trips").children[i].children[1].innerText);
          }
          catch{
          }
          searchDiv.classList.add('hide');   
      }
  }
}