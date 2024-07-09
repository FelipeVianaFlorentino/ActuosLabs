document.addEventListener('DOMContentLoaded', () => {
    tlVsl = gsap.timeline({
        scrollTrigger: {
            trigger: '.vsl',
            start: 'top 90%',
            end: 'bottom top',
            markers: false,
            scrub: 2,
            ease: "power1.inOut"
        }
    });

    tlVsl.to('.vsl-content', {
        y: -400
    }, 0)


})
