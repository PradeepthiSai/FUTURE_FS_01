// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// SCROLL REVEAL

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold:0.2,
    }
);

fadeElements.forEach((element)=>{
    observer.observe(element);
});



// TILT EFFECT FOR PROJECT CARDS

const cards = document.querySelectorAll(".project-card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18);
        const rotateY = ((centerX - x) / 18);

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;
    });

});
// TYPING EFFECT

const textArray = [

    "Machine Learning Enthusiast",
    "Full Stack Developer",
    "Creative Problem Solver",
    "Building Interactive Experiences"

];

let typingText = document.querySelector(".typing-text");

let arrayIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(charIndex < textArray[arrayIndex].length){

        typingText.textContent +=
        textArray[arrayIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,80);

    }

    else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        textArray[arrayIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);
    }

    else{

        arrayIndex++;

        if(arrayIndex >= textArray.length){

            arrayIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

window.onload = typeEffect;
// CURSOR GLOW EFFECT

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});