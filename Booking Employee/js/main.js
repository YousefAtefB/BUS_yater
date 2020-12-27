var searchButton=document.getElementById('s-button'),
    searchDiv=document.getElementById('search'),

    trip = document.getElementById('tripspan'),

    from = document.getElementById('from'),
    fSpan=document.getElementById('fspan'),

    to = document.getElementById('to'),
    tSpan=document.getElementById('tspan'),

    time = document.getElementById('time'),
    timeSpan=document.getElementById('timespan'),

    dn = document.getElementById('dn'),
    dnSpan=document.getElementById('dnspan'),

    day = document.getElementById('day'),
    daySpan=document.getElementById('dayspan'),

    year = document.getElementById('year'),
    yearSpan=document.getElementById('yearspan'),

    mpnth = document.getElementById('month'),
    monthSpan=document.getElementById('monthspan'),

    bookhButton=document.getElementById('b-button'),
    cancelButton=document.getElementById('c-button'),
    tripid;


searchButton.onclick = function(){
        "use strict";
        console.log("clicked");
        searchDiv.classList.remove('hide');
};

bookhButton.onclick = function(){
    "use strict";
    console.log("clicked");
    searchDiv.classList.add('hide');
};
cancelButton.onclick = function(){
    "use strict";
    console.log("clicked");
    searchDiv.classList.add('hide');
};

trip.innerHTML="#123456";

from.onchange=function(){
    "use strict";
    fSpan.innerHTML=from.options[from.selectedIndex].value;
};

to.onchange=function(){
    "use strict";
    tSpan.innerHTML=to.options[to.selectedIndex].value;
};

time.onchange=function(){
    "use strict";
    timeSpan.innerHTML=time.options[time.selectedIndex].value;
};
dn.onchange=function(){
    "use strict";
    dnSpan.innerHTML=dn.options[dn.selectedIndex].value;
};

day.onchange=function(){
    "use strict";
    daySpan.innerHTML=day.options[day.selectedIndex].value;
};
month.onchange=function(){
    "use strict";
    monthSpan.innerHTML=month.options[month.selectedIndex].value;
};
year.onchange=function(){
    "use strict";
    yearSpan.innerHTML=year.options[year.selectedIndex].value;
};

document.onclick=function(e){
    "use strict";
    if(e.target.classList.contains('tripid'))
    {
        tripid=document.getElementById('tripspan').innerText;

        console.log(tripid);
    }
};