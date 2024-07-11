// team spacing
const spacing = document.querySelector('.case-spacing');
const heightTrigger = document.querySelector('.cases');
let howMuchSpacing = heightTrigger.offsetWidth;

// spacing.style = "height:" + howMuchSpacing/1.5 + "px";

// TEAM OPACITY

const teams = document.querySelector('.case-block');

const teamsTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".case-wrapper",
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: true
    }
}).to(teams, {
    opacity: 0
});



// TEAM HORIZONTAL
const races = document.querySelector('.cases');
const teamWrapper = document.querySelector('.case-wrapper');
// let amountToScroll = racesWidth - window.innerWidth;

function getScrollAmount(){
    const racesWidth = races.offsetWidth;
    return -(racesWidth - window.innerWidth);
}


const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none"
});


ScrollTrigger.create({
    trigger: ".case-wrapper",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true
    // markers: true
})




