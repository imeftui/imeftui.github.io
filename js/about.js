window.addEventListener('DOMContentLoaded', ()=>{
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            document.querySelector('#misi').removeAttribute('style');
            document.querySelector('#visi').removeAttribute('style');
            document.querySelector('.vismis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 1020){
        anime.timeline({
            easing: 'easeOutExpo',
        }).add({
            targets: '.vismis-line',
            width: ['0', '200'],
            duration: 400,
        }).add({
            targets: '#visi',
            translateX: ['100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        }).add({
            targets: '#misi',
            translateX: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        })
        .add(navAnimate)
    } else {
        anime.timeline({
            easing: 'easeOutQuad'
        }).add({
            targets: '#visi',
            translateY: ['100', '0'],
            opacity: ['0', '1'],
            duration: 800
        }).add({
            targets: '#misi',
            translateY: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 800,
        }, '-=800')
        .add({
            targets: '.vismis-line',
            height: ['0','100%'],
            duration: 800,
        }, '-=1600')
        .add(navAnimate);
    }
    
    if (window.innerHeight < 600) {
        document.getElementById('visi').addEventListener('click', visiAppear);
        document.getElementById('misi').addEventListener('click', misiAppear);
        document.querySelector('.visi-card').addEventListener('click', visiDisappear);
        document.querySelector('.misi-card').addEventListener('click', misiDisappear);
    } else {
        document.getElementById('visi').addEventListener('mouseover', visiAppear);
        document.getElementById('misi').addEventListener('mouseover', misiAppear);
        document.getElementById('visi').addEventListener('mouseout', visiDisappear);
        document.getElementById('misi').addEventListener('mouseout', misiDisappear);
    }

// Visi Misi Section
function visiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    }
}
function misiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    
    if(window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    }
}
function visiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.visi-card').classList.remove('visi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else{
        document.querySelector('.visi-card').classList.remove('visi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function misiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.misi-card').classList.remove('misi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else {
        document.querySelector('.misi-card').classList.remove('misi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function visiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
    }, 500);
}
function misiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
      }, 500);
}
});