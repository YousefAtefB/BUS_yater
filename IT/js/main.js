var addemp=document.getElementById('employee-btn'),  //add employee button 
    empDiv=document.getElementById('employeediv'),   //employee div
    empForm=document.getElementById('employeeform'),  //employee form
    empType=document.getElementById('emptype'),       //employee type select
    empFN=document.getElementById('fname'),          //employee first name input
    empLN=document.getElementById('lname'),          //employee last name input
    empGender=document.getElementById('gender'),     //employee gender select
    empAddress=document.getElementById('address'),   //employee address input
    empsalary=document.getElementById('salary'),    //employee salary input
    empBTN=document.getElementById('emp-sub'),        //employee submit button
    remID=document.getElementById('remID'),         //employee removal id
    empRem=document.getElementById('emp-rem'),     //employee remove button
    sid,                                         //to create station id input
    Type,                                   //some vars to get inputs
    Fname,                                 // 
    Lname,                                //
    Gender,                              // 
    Address,                             //
    Salary,                              //
    Stationid,                          //
    IDrem,                             //

    addstation=document.getElementById('station-btn'),     //add station button 
    staDiv=document.getElementById('stationdiv'),      //station div
    staForm=document.getElementById('stationform'),     //station form
    stalocation=document.getElementById('slocation'),            //station location input
    staSubmit=document.getElementById('sta-sub'),               //station submit button
    remstation=document.getElementById('remstation'),         //station removal id
    stationRem=document.getElementById('sta-rem'),     //station remove button
    stationLocation,                               //station location
    staIdRem,                                         //station id for remove

    addvehicle=document.getElementById('vehicle-btn'),  //add vehicle button 
    vehicleDiv=document.getElementById('vehiclediv'),   //vehicle div
    vehicleForm=document.getElementById('vehicleform'),  //vehicle form
    vehmodel=document.getElementById('model'),          //vehicle model input
    vehtype=document.getElementById('vehicletype'),          //vehicle type input
    passengerNum=document.getElementById('no_pass'),     //passenger num input
    tripID=document.getElementById('trip-id'),   //trip id input
    staidveh=document.getElementById('station-id'),    //stationid for vehcile input
    driverID=document.getElementById('driver-id'),         //driver id for vehicle input
    vehicleBTN=document.getElementById('vehicle-sub'),        //vehicle submit button
    remvehID=document.getElementById('remvehID'),         //vehicle removal id
    remvehBTN=document.getElementById('vehicle-rem'),     //employee remove button
    vehicleModel,                                 // 
    vehicletype,                                //
    numofpass,                              // 
    tid,                             //
    SID,                              //
    driverid,                           //
    vid,                          //  
    exist=false;

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
empType.onchange=function()
{
    "use strict";
    if((empType.options[empType.selectedIndex].value=="Analyst" || empType.options[empType.selectedIndex].value=="Booking Employee" ) && !exist)
    {
        sid=document.createElement('input');
        sid.setAttribute("placeholder","Station ID");
        sid.setAttribute("type","number");
        empForm.insertBefore(sid,empForm.childNodes[12]);
        exist=true;
    }
    Type=empType.options[empType.selectedIndex].value;
};

empGender.onchange=function()
{
    "use strict";
    Gender=empGender.options[empGender.selectedIndex].value;
};

addemp.onclick=function(){
    "use strict";
    empDiv.classList.remove('hide');
    staDiv.classList.add('hide');
    vehicleDiv.classList.add('hide');
}
empBTN.onclick=function(){
    "use strict";
    Type=empType.options[empType.selectedIndex].value;
    Fname=empFN.value;
    Lname=empLN.value;
    Gender=empGender.options[empGender.selectedIndex].value;
    Address=empAddress.value;
    Salary=empsalary.value;
    Stationid=sid.value;
}

empRem.onclick=function(){
    "use strict";
    IDrem=remID.value;
}
//////////////////////////////////////////////////////////
addstation.onclick=function(){
    "use strict";
    staDiv.classList.remove('hide');
    empDiv.classList.add('hide');
    vehicleDiv.classList.add('hide');
}
staSubmit.onclick=function(){
    "use strict";
                           
    stationLocation=stalocation.value;
}
stationRem.onclick=function(){
    "use strict";
    staIdRem= remstation.value;
}
///////////////////////////////////////////////////////////////////
addvehicle.onclick=function(){
    "use strict";
    vehicleDiv.classList.remove('hide');
    staDiv.classList.add('hide');
    empDiv.classList.add('hide');
}
staSubmit.onclick=function(){
    "use strict";
    vehicleModel=vehmodel.value;
    vehicletype=empLN.value;
    numofpass=empAddress.value;
    tid=empsalary.value;
    SID=empUN.value;
    driverid=empPW.value;
}
stationRem.onclick=function(){
    "use strict";
    vid= remvehID.value;
}