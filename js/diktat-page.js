window.addEventListener('DOMContentLoaded', () => {
    var listHeader = document.querySelectorAll('.diktat-list-header');
    var linkHeader = document.querySelectorAll('.diktat-link-header');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            listHeader.forEach((a)=>{
                a.classList.remove('open');
            })
            linkHeader.forEach((a)=>{
                a.removeAttribute('style');
                a.classList.remove('active');
            })
            document.querySelectorAll('.diktat-list').forEach((a)=>{
                a.removeAttribute('style');
            })
            document.querySelectorAll('.diktat-link').forEach((a)=>{
                a.removeAttribute('style');
            })
        }
    })
    listHeader.forEach(function(a){
        a.addEventListener('click', (e) => {
            var selectedHeader = e.target;
            var selectedList = e.target.parentElement.nextElementSibling;
            if (selectedHeader.classList.contains('open')){
                anime({
                    targets: selectedList,
                    height: 0,
                    opacity: 0,
                    duration: 800,
                    easing: 'easeOutExpo',
                    complete: () => {
                        selectedList.style.display = 'none';
                        selectedHeader.classList.remove('open');
                        document.querySelectorAll('.diktat-link').forEach(function(a){
                            a.removeAttribute('style');
                        });
                        document.querySelectorAll('.diktat-link-header').forEach(function(a){
                            a.classList.remove('active');
                        });
                    }
                })
            } else{
                selectedList.style.display = 'block';
                anime.timeline({
                    easing: 'easeOutQuad'
                }).add({
                    targets: selectedList,
                    height: 100,
                    opacity: 1,
                    duration: 600,
                }).add({
                    targets: selectedList.querySelectorAll('.diktat-link-header'),
                    translateX: ['-100', '0'],
                    opacity:  ['0', '1'],
                    duration: 400,
                    delay: (el, i) => {
                        return (100 * i) ;
                    }
                }, '-=300')
                selectedHeader.classList.add('open');
            }
        })
    })
    linkHeader.forEach((a) => {
        a.addEventListener('click', (e) => {
            var diktatLinksHeader = e.target;
            var diktatLinks = diktatLinksHeader.parentElement.nextElementSibling;
            var diktatList = diktatLinksHeader.parentElement.parentElement.parentElement;
            if (window.innerWidth < 1020) {
                if (diktatLinksHeader.classList.contains('active')){
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            diktatLinks.removeAttribute('style');
                        }
                    }).add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: 0,
                        duration: 400,
                    }).add({
                        targets: diktatLinks,
                        height: 0,
                        duration: 400,
                    }, '-=400')
                    diktatLinksHeader.classList.remove('active');
                } else {
                    diktatLinks.style.display = 'block';
                    anime.timeline({
                        easing: 'easeOutExpo',
                        delay: 300
                    })
                    .add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: ['0', '1'],
                        translateX: ['-50', '0'],
                        duration: 800,
                        delay: anime.stagger(100),
                    })
                    diktatLinksHeader.classList.add('active');
                    //diktatList.style.height = 'auto';
                    diktatList.removeAttribute('style');
                    diktatList.style.display = 'block';
                }
            }
        })
    })

    //DIKTAT ARRAY
    var diktatBookContainer = document.querySelectorAll('.diktat-book-container');
    var diktatBookTitle = document.querySelectorAll('.diktat-book-title');
    var diktatBookCover = document.querySelectorAll('.diktat-cover');
    
    function diktatRefresh (x, y){
        for (let i = 0; i <= 14; i++){
            y.parentElement.nextElementSibling.querySelectorAll('a')[i].text = x[i].title;
            y.parentElement.nextElementSibling.querySelectorAll('a')[i].href = x[i].link;
            y.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = x[i].display;
        }
    }

    diktatBookContainer.forEach((a) => {
        a.parentElement.target = '_blank';
    })
    document.querySelectorAll('.diktat-link').forEach((a) => {
        a.querySelectorAll('a').forEach((b) => {
            b.target = '_blank';
        })
    })

    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        if (a.classList.contains('uts-ganjil-2020')){
            diktatRefresh(utsGanjil20, a)
        }
        if (a.classList.contains('uas-ganjil-2020')){
            diktatRefresh(uasGanjil20, a)
        }
        if (a.classList.contains('uts-genap-2020')){
            diktatRefresh(utsGenap20, a)
        }
        if (a.classList.contains('uas-genap-2020')){
            diktatRefresh(uasGenap20, a)
        }
        if (a.classList.contains('uts-ganjil-2019')){
            diktatRefresh(utsGanjil19, a)
        }
        if (a.classList.contains('uas-ganjil-2019')){
            diktatRefresh(uasGanjil19, a)
        }
        if (a.classList.contains('uts-genap-2019')){
            diktatRefresh(utsGenap19, a)
        }
        if (a.classList.contains('uas-genap-2019')){
            diktatRefresh(uasGenap19, a)
        }
        if (a.classList.contains('uts-ganjil-2018')){
            diktatRefresh(utsGanjil18, a)
        }
        if (a.classList.contains('uas-ganjil-2018')){
            diktatRefresh(uasGanjil18, a)
        }
        if (a.classList.contains('uts-genap-2018')){
            diktatRefresh(utsGenap18, a)
        }
        if (a.classList.contains('uas-genap-2018')){
            diktatRefresh(uasGenap18, a)
        }
        if (a.classList.contains('uts-ganjil-2017')){
            diktatRefresh(utsGanjil17, a)
        }
        if (a.classList.contains('uas-ganjil-2017')){
            diktatRefresh(uasGanjil17, a)
        }
    })

    function diktatBookRefresh (x){
        for (let i = 0; i <= 14; i++){
            diktatBookContainer[i].parentElement.href = x[i].link
            diktatBookContainer[i].parentElement.style.display = x[i].display
            diktatBookTitle[i].querySelector('h1').textContent = x[i].title.toUpperCase();
            diktatBookCover[i].querySelector('img').src = x[i].img
        }
    }
    
    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        a.addEventListener('click', () => {
            if (a.classList.contains('uts-ganjil-2020')){
                diktatBookRefresh(utsGanjil20)
            }
            if (a.classList.contains('uas-ganjil-2020')){
                diktatBookRefresh(uasGanjil20)
            }
            if (a.classList.contains('uts-genap-2020')){
                diktatBookRefresh(utsGenap20)
            }
            if (a.classList.contains('uas-genap-2020')){
                diktatBookRefresh(uasGenap20)
            }
            if (a.classList.contains('uts-ganjil-2019')){
                diktatBookRefresh(utsGanjil19)
            }
            if (a.classList.contains('uas-ganjil-2019')){
                diktatBookRefresh(uasGanjil19)
            }
            if (a.classList.contains('uts-genap-2019')){
                diktatBookRefresh(utsGenap19)
            }
            if (a.classList.contains('uas-genap-2019')){
                diktatBookRefresh(uasGenap19)
            }
            if (a.classList.contains('uts-ganjil-2018')){
                diktatBookRefresh(utsGanjil18)
            }
            if (a.classList.contains('uas-ganjil-2018')){
                diktatBookRefresh(uasGanjil18)
            }
            if (a.classList.contains('uts-genap-2018')){
                diktatBookRefresh(utsGenap18)
            }
            if (a.classList.contains('uas-genap-2018')){
                diktatBookRefresh(uasGenap18)
            }
            if (a.classList.contains('uts-ganjil-2017')){
                diktatBookRefresh(utsGanjil17)
            }
            if (a.classList.contains('uas-ganjil-2017')){
                diktatBookRefresh(uasGanjil17)
            }
            anime({
                targets: diktatBookContainer,
                translateY: ['-100', '0'],
                opacity: ['0', '1'],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutExpo',
            })
        })
    })

    //bouncing book
    var diktatBook = document.querySelectorAll('.diktat-book-container');
    diktatBook.forEach(function(a){
        var bouncingBook = anime({
            targets: a.querySelector('.diktat-cover'),
            translateY: -20,
            direction: 'alternate',
            duration: 600,
            loop: true,
            autoplay: false,
            easing: 'easeInOutSine',
        })
        setTimeout(function(){
            a.addEventListener('mouseenter', (e) => {
                setTimeout(bouncingBook.play , 500)
            })
        }, 500)
        a.addEventListener('mouseleave', (e) => {
            setTimeout(function(){
                bouncingBook.loop = false;
                bouncingBook.paused = true;
                anime({
                    targets: a.querySelector('.diktat-cover'),
                    translateY: 0,
                    duration: 500,
                    easing: 'easeOutExpo',
                    complete: function (a) {
                        document.querySelector('.diktat-cover').removeAttribute('style');
                        bouncingBook.seek(0)
                    }
                })
            }, 500)
        })
    })
})