document.addEventListener('DOMContentLoaded', () => {

    // team spacing
    const heightTrigger = document.querySelector('.cases');
    let howMuchSpacing = heightTrigger.offsetWidth;

    // spacing.style = "height:" + howMuchSpacing/1.5 + "px";

    // TEAM OPACITY

    const teams = document.querySelector('.case-item');

    gsap.timeline({
        scrollTrigger: {
            trigger: ".cases-wrapper",
            start: "top top",
            end: "bottom 60%",
            markers: false,
            scrub: true
        }
    }).to(teams, {
        opacity: 0
    });



    // TEAM HORIZONTAL
    const races = document.querySelector('.cases');
    const teamWrapper = document.querySelector('.cases-wrapper');
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
        trigger: ".cases-wrapper",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: true,
        invalidateOnRefresh: true
        // markers: true
    })

    function atualizarAlturaFooter(){
        var team = document.querySelector('.cases');
        var footerSpacing = team.clientWidth - window.innerWidth;
        var footer = document.querySelector('.spacing');
        
        footer.style.height = footerSpacing + 'px';
    };
    
    window.addEventListener('resize', atualizarAlturaFooter);
    atualizarAlturaFooter();
    



});