function Switch1() {
    x=document.getElementById("developD");
    y=document.getElementById("designD");

    x.classList.add("active");
    x.style.borderBottom = "solid 3px #AD354D";
    y.classList.remove("active");
    y.style.borderBottom = "none";


    xD=document.getElementById("developedD").style.display = "block";
    yD=document.getElementById("designedD").style.display = "none";  
    
}

function Switch2() {
    x=document.getElementById("developD");
    y=document.getElementById("designD");

    x.classList.remove("active");
    y.style.borderBottom = "solid 3px #AD354D";
    y.classList.add("active");
    x.style.borderBottom = "none";


    xD=document.getElementById("developedD").style.display = "none";
    yD=document.getElementById("designedD").style.display = "block";    
}

function Switch3() {
    x=document.getElementById("develop");
    y=document.getElementById("design");

    x.classList.add("active");
    x.style.borderBottom = "solid 3px #AD354D";
    y.classList.remove("active");
    y.style.borderBottom = "none";


    xD=document.getElementById("developed").style.display = "block";
    yD=document.getElementById("designed").style.display = "none";  
    
}

function Switch4() {
    x=document.getElementById("develop");
    y=document.getElementById("design");

    x.classList.remove("active");
    y.style.borderBottom = "solid 3px #AD354D";
    y.classList.add("active");
    x.style.borderBottom = "none";


    xD=document.getElementById("developed").style.display = "none";
    yD=document.getElementById("designed").style.display = "block";    
}