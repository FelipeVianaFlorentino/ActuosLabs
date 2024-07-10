document.addEventListener('DOMContentLoaded', function( ) {
    const service1 = document.querySelector('#service-1-image');
    const service2 = document.querySelector('#service-2-image');
    const service3 = document.querySelector('#service-3-image');
    const service4 = document.querySelector('#service-4-image');
    const services = document.querySelectorAll('.item-right-inside');
    const itemsLeft = document.querySelectorAll('.item-left');

    function handleResize() {
        if (window.innerWidth > 768) {
            // Executar código para tela maior ou igual a 768px
            service1.style.opacity = 1;

            ScrollTrigger.create({
                trigger: '.item-right',
                markers: false,
                pin: true,
                end: 'bottom bottom',
                endTrigger: '.services',
                start: 'center 50%',
                invalidateOnRefresh: true
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: itemsLeft[1],
                    markers: false,
                    start: 'top 60%',
                    end: 'top 52%',
                    scrub: true
                }
            })
            .to(service1, {opacity: 0}, 0)
            .to(service2, {opacity: 1}, 0);

            gsap.timeline({
                scrollTrigger: {
                    trigger: itemsLeft[2],
                    markers: false,
                    start: 'top 60%',
                    end: 'top 52%',
                    scrub: true
                }
            })
            .to(service2, {opacity: 0}, 0)
            .to(service3, {opacity: 1}, 0);

            gsap.timeline({
                scrollTrigger: {
                    trigger: itemsLeft[3],
                    markers: false,
                    start: 'top 60%',
                    end: 'top 52%',
                    scrub: true
                }
            })
            .to(service3, {opacity: 0}, 0)
            .to(service4, {opacity: 1}, 0);
        } else {
            
            services.forEach(service => {
                service.style.opacity = 1;
            });
            
        }
    }

    // Chamar a função uma vez ao carregar a página
    handleResize();

    // Chamar a função ao redimensionar a janela
    window.addEventListener('resize', handleResize);
});
