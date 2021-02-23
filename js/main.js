//Nav animation
var navAnimate = {
    targets: 'nav ul li',
    duration: 1000,
    translateY: ['-200', '0'],
    opacity: ['0', '1'],
    // delay: (el, i) => {
    //     return 100 * i;
    // }
    delay: anime.stagger(100, {direction: 'reverse'})
}

//NAV RESPONSIVE
document.addEventListener('DOMContentLoaded', (e) => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-navbar');
    const navLinks = nav.querySelectorAll('li');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            nav.removeAttribute('style');
            navLinks.forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.querySelectorAll('div').forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.classList.remove('open');
        }
    })
    
    burger.addEventListener('click', (e) => {
        if (burger.classList.contains('nav-progress')){
        } else {
            burger.classList.add('nav-progress')
            if (burger.classList.contains('open')) {
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        navLinks.forEach( (a) => {
                            a.style.display = 'none';
                            a.removeAttribute('style');
                        })
                        nav.removeAttribute('style');
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: navLinks,
                    opacity: ['1', '0'],
                    translateY: ['0', '-50'],
                    duration: 400,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }).add({
                    targets: nav,
                    height: ['50vh', '0'],
                    duration: 400,
                }, '-=100')
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 0,
                    translateY: ['12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: 0,
                    translateY: ['-12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                burger.classList.remove('open');
            } else {
                navLinks.forEach( (a) => {
                    a.style.display = 'block';
                })
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 45,
                    translateY: ['0', '12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: -45,
                    translateY: ['0', '-12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 0,
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime.timeline({
                    easing: 'easeOutExpo',
                    complete: function (anim) {
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: nav,
                    height: ['0', '50vh'],
                    duration: 800,
                }).add({
                    targets: navLinks,
                    opacity: ['0', '1'],
                    translateY: ['50', '0'],
                    duration: 1000,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }, '-=400')
                burger.classList.add('open');
            }
        }
    })
})

//NAV LINE
document.querySelector('.main-navbar').querySelectorAll('li').forEach((a)=>{
    a.appendChild(document.createElement('div'));
    a.querySelector('div').classList.add('line');
});

//Search Box
let expandSearch = false;
document.querySelector('.search-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    if (!expandSearch){
        expandSearch = true;
        document.querySelector('.search-txt').classList.add('expand');
    } else {
        if (document.querySelector('.search-txt').value == ''){
            expandSearch = false;
            document.querySelector('.search-txt').classList.remove('expand');
        } else {
            searchFunction();
            document.querySelector('#searchform').submit();
            document.querySelector('.search-txt').value = '';
        }
    }
})
function searchFunction(){
    localStorage.searchText = document.querySelector('.search-txt').value;
}
function searchFunctionResult(){
    localStorage.searchText = document.querySelector('.search-txt-result').value;
}