let react_=document.getElementById("react");
let js_=document.getElementById("j.s");
let html_=document.getElementById("html");
let css_=document.getElementById("css");
let body_=document.getElementsByTagName("body")[0];
let move_=document.getElementsByTagName("input")[0];
let back_=document.getElementsByTagName("input")[1];
let avaliable$=document.getElementById("avaliable");
let selected$=document.getElementById("selected")
let flag_=null;
react_.addEventListener("click",()=>{
    react_.style.setProperty('background-color', 'rgba(34, 44, 95, 0.73)', 'important');
     js_.style.setProperty('background-color','', );
    html_.style.setProperty('background-color','', );
    css_.style.setProperty('background-color','', );
    flag_=1;
    event.stopPropagation();
});
js_.addEventListener("click",()=>{
    js_.style.setProperty('background-color', 'rgba(34, 44, 95, 0.73)', 'important');
     react_.style.setProperty('background-color','', );
    html_.style.setProperty('background-color','', );
    css_.style.setProperty('background-color','', );
    flag_=2;
    event.stopPropagation();
});
html_.addEventListener("click",()=>{
    html_.style.setProperty('background-color', 'rgba(34, 44, 95, 0.73)', 'important');
     js_.style.setProperty('background-color','', );
    react_.style.setProperty('background-color','', );
    css_.style.setProperty('background-color','', );
    flag_=3;
    event.stopPropagation();
});
css_.addEventListener("click",()=>{
    css_.style.setProperty('background-color', 'rgba(34, 44, 95, 0.73)', 'important');
     js_.style.setProperty('background-color','', );
    html_.style.setProperty('background-color','', );
    react_.style.setProperty('background-color','', );
    flag_=4;
    event.stopPropagation();
});
body_.addEventListener("click",()=>{
    react_.style.setProperty('background-color','', );
    js_.style.setProperty('background-color','', );
    html_.style.setProperty('background-color','', );
    css_.style.setProperty('background-color','', );
    flag_=null;
})
move_.addEventListener("click",()=>{
    if(flag_==1){ selected$.appendChild(react_);};
     if(flag_==2){ selected$.appendChild(js_);};
      if(flag_==3){ selected$.appendChild(html_);};
       if(flag_==4){ selected$.appendChild(css_);};
   
});
back_.addEventListener("click",()=>{
    if(flag_==1){ avaliable$.appendChild(react_);};
     if(flag_==2){ avaliable$.appendChild(js_);};
      if(flag_==3){ avaliable$.appendChild(html_);};
       if(flag_==4){ avaliable$.appendChild(css_);};
   
})
