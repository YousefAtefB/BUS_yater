var busId=document.getElementById("b-id"),
    searchBTN=document.getElementById("search-btn"),
    Result=document.getElementById("result"),
    id,
    info,
    pid,
    checked,
    arr;

//arr.length=getPassengercount(id);
//arr=getPassengerId(id);

searchBTN.onclick=function()
{
    "use strict";
    id=busId.value;
    Result.classList.remove("hide");
    for(var i=0;i<arr.length;i++){
    info=document.createElement('div');
    pid=document.createElement('p');
    pid.innerHTML=busId.value;
    info.classList.add("dresult");
    checked=document.createElement('input');  
    checked.type="checkbox";
    checked.classList.add("checkbox");
    info.appendChild(pid);
    info.appendChild(checked);
    Result.appendChild(info);}
};


    