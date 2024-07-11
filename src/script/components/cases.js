document.addEventListener('DOMContentLoaded', () => {

    const casesWidth = document.querySelector('.cases').offsetWidth;

    function setWidthToScroll() {
        widthToScroll = casesWidth - window.innerWidth;
    }

    window.addEventListener('resize', setWidthToScroll)
    setWidthToScroll();

    const tlCases = gsap.timeline({
        scrollTrigger: {
            trigger: '.cases-wrapper',
            markers: true,
            pin: true,
            scrub: true
        }
    });

    tlCases.to('.cases', {
        x: -widthToScroll
    });

})