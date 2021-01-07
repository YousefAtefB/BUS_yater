var searchButton=document.getElementById('s-button'),
    searchDiv=document.getElementById('search'),
    Trips=document.getElementById('trips'),
    trip = document.getElementById('tripspan'),

    from = document.getElementById('from'),
    to = document.getElementById('to'),

    tripid,
    arr;

/*async function BookingEmployeeSearch() {
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
    }*/

searchButton.onclick = function(){
        "use strict";
        
        searchDiv.classList.remove('hide');
        await BookingEmployeeSearch();
        for(var i=0;i<arr.length;i++)
        {
            arr[i];
            var t=document.createElement('div');
            t.classList.add('t-info');
            var tid=document.createElement('p');
            var tidspan=document.createElement('span');
            tid.innerHTML='id:';
            tidspan.innerHTML=arr['id'];
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
            tdate.innerHTML='date: '+arr['date'];
            tdate.classList.add('t-infop');
            t.appendChild(tdate);

            var tdur=document.createElement('p');
            tdur.innerHTML='Duration:'+ arr['duration'] ;
            tdur.classList.add('t-infop');
            t.appendChild(tdur);

            var tcost=document.createElement('p');
            tcost.innerHTML='Cost: ' +arr['cost'];
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




for(var i=0;i<arr.length;i++)
{
    document.querySelector("#trips").children[i].children[6].onclick=function(){
        "use strict";
        await BookingEmployeeBook( document.querySelector("#trips").children[i].children[1]);
        searchDiv.classList.add('hide');
    }
}
for(var i=0;i<arr.length;i++)
{
    document.querySelector("#trips").children[i].children[7].onclick=function(){
        "use strict";
        await BookingEmployeeCancel( document.querySelector("#trips").children[i].children[1]);
        searchDiv.classList.add('hide');
    }
}
