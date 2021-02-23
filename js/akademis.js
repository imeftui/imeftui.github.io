window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelector('#diktat').removeAttribute('style');
            document.querySelector('#ebook').removeAttribute('style');
            document.querySelector('.akademis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 768) {
        var akademisLine = {
            targets: '.akademis-line',
            width: ['0', '20rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateY: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateY: ['-500', '0'],
            duration: 1000,
        }
    } else {
        var akademisLine = {
            targets: '.akademis-line',
            height: ['0', '6rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateX: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateX: ['-500', '0'],
            duration: 1000,
        }
    }
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add(akademisLine)
    .add(akademisDiktat)
    .add(akademisEbook, '-=800')
    .add(navAnimate, '-=400')

    let isOpen = false;
    let onProgress = false;

    setTimeout(function(){
        document.querySelector('#ebook-a').addEventListener('click', (e) => {
            var ebook = document.querySelectorAll('.ebook-list');
            var ebookDropdown = document.querySelector('.ebook-dropdown');
            if (!onProgress){
                if (isOpen){
                    onProgress = true;
                    animation = anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            isOpen = false;
                            onProgress = false;
                            ebookDropdown.style.display = 'none';
                            ebook.forEach(function(a){
                                a.style.display = 'none';
                            })
                        }
                    }).add({
                        targets: '.ebook-list',
                        duration: 400,
                        translateX: ['0', '-50'],
                        opacity: ['1', '0'],
                        delay: (el, i) => {
                            return 100 * i;
                        },
                    }).add({
                        targets: '.ebook-dropdown',
                        height: 0,
                        duration: 1000,
                    })
                }else{
                    ebookDropdown.style.display = 'block';
                    ebook.forEach(function(a){
                        a.style.display = 'block';
                    })
                    onProgress = true;
                    isOpen = true;
                    animation = anime.timeline({
                        easing: 'easeOutSine',
                        complete: () => {
                            onProgress = false;
                        }
                    }).add({
                        targets: '.ebook-dropdown',
                        height: 100,
                        duration: 1000,
                    }).add({
                        targets: '.ebook-list',
                        duration: 400,
                        translateX: ['-50', '0'],
                        opacity: ['0', '1'],
                        delay: (el, i) => {
                            return 100 * i;
                        },
                    })
                }
            }
        })
    }, 2000)
})