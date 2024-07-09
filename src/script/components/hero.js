document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const heroImage = document.querySelector('.hero-img');
    const targetDiv = document.querySelector('.vsl-content');

    // Obtém a posição da div alvo em relação ao documento
    const targetRect = targetDiv.getBoundingClientRect();
    const targetTop = targetRect.top + window.scrollY;
    const targetLeft = targetRect.left + window.scrollX;
    const targetWidth = targetDiv.offsetWidth;
    const targetHeight = targetDiv.offsetHeight;

    let tlHero = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: '-=100 0',
            end: 'bottom 20%',
            scrub: 2,
            // markers: true
        }
    });


    
    tlHero.to(heroImage, {
        rotate: 0,
        width: targetWidth,
        height: targetHeight,
        y: targetTop - heroImage.getBoundingClientRect().top - 400,
        x: targetLeft - heroImage.getBoundingClientRect().left - 300,
        borderRadius: '60px',
        ease: "power4.in"
    }, 0);


    

});
