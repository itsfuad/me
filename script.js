var navbarshow, navbarhide, bgfade;
const deg = 6;

/*setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

document.getElementById("hr").style.transform = `rotateZ(${(hh)+(mm/12)}deg`;
document.getElementById("mn").style.transform = `rotateZ(${mm}deg`;
document.getElementById("sc").style.transform = `rotateZ(${ss}deg`;
})*/




function load(){
  document.getElementById("load").classList.toggle("done");
}

var about_not_loaded = true;
var skills_not_loaded = true;
var contact_not_loaded = true;

window.addEventListener("scroll", () => {
    var pos = window.scrollY;
    if (pos > 5) {
        document.getElementById("bg").classList.add("fade");
    }
    else{
        document.getElementById("bg").classList.remove("fade");
    }
    
});

function isInIvewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innterHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innterWidth || document.documentElement.clientWidth)
    );
}


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
        document.getElementsByClassName("about")[0].scrollIntoView(true);
}
function skills(){
        //window.scrollTo(0, 1100);
        document.getElementsByClassName("skills")[0].scrollIntoView(true);  
}
function contact(){
        //window.scrollTo(0, 2300);
        document.getElementsByClassName("contact_me")[0].scrollIntoView(true);

}
function show() {
    alert("Ok");
}
function animateleft(elem){
    elem.style.animation = "left-in 1s ease forwards";
}
function animateright(elem){
    elem.style.animation = "right-in 1s ease forwards";
}


