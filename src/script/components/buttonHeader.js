
document.addEventListener('DOMContentLoaded', () => {

    const buttonMenuHeader = document.querySelector('header > .btn-icon');
    const barras = document.querySelectorAll('.line-icon-menu');

    buttonMenuHeader.addEventListener('mouseenter', () => {

        gsap.to(barras, 0.2, {
            y: 3,
            ease: 'power1.in',
            stagger: 0.02,
            onComplete: function(){
                gsap.to(barras, 0.4, {
                    y: 0,
                    ease: 'power1.in',
                    stagger: 0.01
                })
            }
        });
        
    })






})