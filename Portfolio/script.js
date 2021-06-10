var navbarshow, navbarhide, bgfade;
const deg = 6;



setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

document.getElementById("hr").style.transform = `rotateZ(${(hh)+(mm/12)}deg`;
document.getElementById("mn").style.transform = `rotateZ(${mm}deg`;
document.getElementById("sc").style.transform = `rotateZ(${ss}deg`;
})

window.addEventListener("scroll", () => {
    var pos = window.scrollY;
    if (pos > 5) {
        document.getElementById("bg").classList.add("fade");
    }
    else{
        document.getElementById("bg").classList.remove("fade");
    }
    if(pos > 0){

    }
});

navbarshow = function(){
    document.getElementsByTagName("ul")[0].classList.add("active");
    document.getElementById("navmobile").classList.add("active");
    document.getElementById("close").classList.add("active");
}
navbarhide = function(){
    document.getElementsByTagName("ul")[0].classList.remove("active");
    document.getElementById("navmobile").classList.remove("active");
    document.getElementById("close").classList.remove("active");
}

function home(){
    window.scrollTo(0, 0);
}
function about(){
    if(window.orientation == 0)
    {
        window.scrollTo(0, 590);
    }
    else{
        window.scrollTo(0, 450);
    }
}
function skills(){
    if(window.orientation == 0)
    {
        window.scrollTo(0, 1390);
    }
    else{
        window.scrollTo(0, 1100);
    }
}
function contact(){
    if(window.orientation == 0)
    {
        window.scrollTo(0, 2790);
    }
    else{
        window.scrollTo(0, 2300);
    }
}



