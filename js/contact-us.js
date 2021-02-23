window.addEventListener('DOMContentLoaded', () => {
    anime.timeline({
        easing: 'easeOutExpo',
    }).add({
        targets: document.querySelector('.contact-title-line'),
        width: ['0', '30%'],
        duration: 500,
    }).add({
        targets: document.querySelector('.contact-title').querySelector('h1'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 500,
    }, '-=500').add({
        targets: document.querySelectorAll('.contact-desc-title'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=350').add({
        targets: document.querySelectorAll('.contact-desc-text'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=500').add({
        targets: document.querySelector('.social-media-icons').querySelectorAll('div'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        delay: anime.stagger(100, {
            from: 'center',
            direction: 'reverse',
        })
    }, '-=600').add(navAnimate, '-=700')
})