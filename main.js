const Typed = require("typed.js")
const theLogo = document.getElementById("logo");
const theName = document.getElementById("name");
const more = document.getElementById("more");
const portfolio = document.getElementById("Portfolio")
let isHovered=false;
let isHoveredMore=false;

theLogo.addEventListener("mouseover",()=>{
    // theLogo.style.transform="scale(1.3)";
    // theLogo.style.textDecoration="underline";
    // theLogo.style.color="yellow";
    theLogo.classList.add("onHover");
    theLogo.classList.remove("offHover");
})


theLogo.addEventListener("mouseout",()=>{
    // theLogo.style.transform="scale(1)";
    // theLogo.style.textDecoration="none";
    // theLogo.style.color="white";
    theLogo.classList.add("offHover");
    theLogo.classList.remove("onHover");
})


theName.addEventListener("mouseenter",()=>{
if (!isHovered){
    theName.style.transform="translateX(200px)";
    isHovered=true;
}
else if (isHovered){
    theName.style.transform="translateX(-30px)";
    isHovered=false;
}
})

more.addEventListener("mouseover",()=>{
    if (!isHoveredMore){
        more.style.transform="scale(1.3)";
        more.innerHTML="Do it";
        more.style.backgroundColor="red";
        isHoveredMore=true;
    }
    })
    
more.addEventListener("mouseout", ()=>{
    if (isHoveredMore){
        more.style.transform="scale(1)";
        more.innerHTML="more about me";
        more.style.backgroundColor="yellow";
        isHoveredMore=false;
    }
})





// theName.addEventListener("mouseover",()=>{
//     theLogo.
//     theLogo.style.
// })
