window.addEventListener('DOMContentLoaded', () => {
    var ebook = document.querySelectorAll('.ebook-click');
    ebook.forEach(function(a){
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (a.classList.contains('open')){
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        a.parentElement.parentElement.style.zIndex = 0;
                        a.classList.remove('open');
                        a.parentElement.parentElement.style.justifyContent = 'center';
                    }
                })
                .add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['0', '-50'],
                    opacity: 0,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                .add({
                    targets: a.nextElementSibling,
                    width: '100%',
                    duration: 600,
                }, '-=200')
            } else {
                a.parentElement.parentElement.style.zIndex = 10;
                if (window.innerWidth < 768){
                    a.parentElement.parentElement.style.justifyContent = 'flex-start';
                };
                anime.timeline({
                    easing: 'easeOutExpo'
                }).add({
                    targets: a.nextElementSibling,
                    width: '200%',
                    duration: 600,
                }).add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['-50', '0'],
                    opacity: 1,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                setTimeout(function(){
                    a.classList.add('open');
                }, 650)
            }
        })
    })
})