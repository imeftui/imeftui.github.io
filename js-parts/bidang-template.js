anime.timeline({
    easing: 'easeOutExpo',
    complete: () => {
        document.querySelectorAll('.bidang-foto').forEach((a) => {
            a.removeAttribute('style');
            a.style.opacity = '1';
        })
    }
})
.add({
    targets: '.bidang-logo img',
    duration: 800,
    translateX: [-200, 0],
    opacity: [0, 1],
})
.add({
    targets: '.bidang-title',
    duration: 800,
    translateX: [200, 0],
    opacity: [0, 1],
}, '-=400')
.add({
    targets: '.bidang-proker',
    duration: 800,
    translateX: [200, 0],
    opacity: [0, 1],
}, '-=400')
.add({
    targets: '.bidang-foto-container div',
    duration: 500,
    translateY: [40, 0],
    opacity: [0, 1],
    delay: (el, i) => {
        return 100 * i;
    },
})
.add(navAnimate);

//Scroll Animation
scrollAnimateBidang();
function scrollAnimateBidang () {
    window.addEventListener('scroll', () => {
        var videoBidangPosition = document.querySelector('.video-bidang').getBoundingClientRect().top;
        var bphSaContainerPosition = document.querySelector('.bph-sa-container').getBoundingClientRect().top;
        var bpContainerPosition = document.querySelector('.bp-container').getBoundingClientRect().top;
        var logoBidangPosition = document.querySelector('.logbid-logo').getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (videoBidangPosition < screenHeight / 1.3){
            if (!(document.querySelector('.video-bidang').classList.contains('active'))){
                document.querySelector('.video-bidang').classList.add('active');
                var scrollVideo = anime.timeline({
                    easing: 'easeOutExpo',
                    autolay: false,
                }).add({
                    targets: document.querySelector('.video-bidang-title'), 
                    translateX: ['-100', '0'],
                    opacity: ['0', '1'],
                    duration: 1000,
                }).add({
                    targets: document.querySelector('.video-background'),
                    height: ['0%','100%'],
                    opacity: ['0', '1'],
                    duration: 1000,
                }, '-=500').add({
                    targets: document.querySelector('.video-bidang'),
                    translateX: ['-100', '0'],
                    opacity: ['0', '1'],
                    duration: 1000,
                }, '-=500')
                scrollVideo.play;
            }
        }
        if (bphSaContainerPosition < screenHeight / 1.5){
            if (!(document.querySelector('.bph-sa-container').classList.contains('active'))){
                document.querySelector('.bph-sa-container').classList.add('active');
                anime.timeline({
                }).add({
                    targets: document.querySelector('.bph-text'), 
                    opacity: ['0', '1'],
                    easing: 'easeOutExpo',
                    duration: 1000,
                }).add({
                    targets: document.querySelector('.sa-text'),
                    opacity: ['0', '1'],
                    easing: 'easeOutExpo',
                    duration: 1000,
                }, '-=900').add({
                    targets: document.querySelectorAll('.bph-foto'),
                    scale: [0, 1],
                    delay: (el, i) => {
                        return i*100;
                    },
                }, '-=900').add({
                    targets: document.querySelectorAll('.bph-nama'),
                    translateY: ['50', '0'],
                    opacity: ['0', '1'],
                    delay: (el, i) => {
                        return i*100;
                    }
                }, '-=500').add({
                    targets: document.querySelectorAll('.bph-jabatan'),
                    translateY: ['50', '0'],
                    opacity: ['0', '1'],
                    delay: (el, i) => {
                        return (i*100);
                    }
                }, '-=1000')
            }
        }
        if (bpContainerPosition < screenHeight / 1.5){
            if (!(document.querySelector('.bp-container').classList.contains('active'))){
                document.querySelector('.bp-container').classList.add('active');
                anime.timeline({
                }).add({
                    targets: document.querySelector('.bp-text'),
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutExpo',
                }).add({
                    targets: document.querySelectorAll('.bp-foto'),
                    scale: [0, 1],
                    delay: (el, i) => {
                        return (i*100);
                    }
                }).add({
                    targets: document.querySelectorAll('.bp-nama'),
                    opacity: [0, 1],
                    translateY: ['50', '0'],
                    delay: (el, i) => {
                        return (i*100);
                    }
                }, '-=1000')
            }
        }
        if (logoBidangPosition < screenHeight / 2){
            if (!(document.querySelector('.logbid-logo').classList.contains('active'))){
                document.querySelector('.logbid-logo').classList.add('active');
                anime.timeline({
                }).add({
                    targets: '.logbid-bidang-logo',
                    scale: [0, 1],
                    duration: 800,
                }).add({
                    targets: '.logbid-bidang-title',
                    opacity: [0, 1],
                    translateX: ['100', '0'],
                    easing: 'easeOutExpo',
                    duration: 600,
                }).add({
                    targets: '.logbid-bidang-desc',
                    opacity: [0, 1],
                    translateX: ['100', '0'],
                    easing: 'easeOutExpo',
                    duration: 600,
                }, '-=400').add({
                    targets: '.logbid-logos div',
                    scale: [0, 1],
                    delay: anime.stagger(100),
                })
            }
        }
    })
}


//CONTENT CHANGE
console.log(localStorage.selectedBidang)
function bidangContentLoad (x){
    document.querySelector('.bidang-logo').querySelector('img').src = x.logoBidang
    document.querySelector('.bidang-title').querySelector('h1').textContent = x.namaBidang;
    document.querySelector('.proker').textContent = x.programKerja;
    for (let i = 0; i <= 9; i++){
        document.querySelectorAll('.bidang-foto')[i].querySelector('img').src = x.fotoBidang[i]
    };
    document.querySelector('.video-bidang-nickname').textContent = `${x.bidangNickname.toUpperCase()}!`;
    document.querySelector('.video-bidang').querySelector('iframe').src = x.videoBidang;
    for (let i = 0; i <= 5; i++){
        document.querySelectorAll('.bph-nama')[i].textContent = x.namaBPH[i].nama;
        document.querySelectorAll('.bph')[i].style.display = x.namaBPH[i].display;
        document.querySelectorAll('.bph-jabatan')[i].textContent = x.namaBPH[i].jabatan;
        document.querySelectorAll('.bph-foto-wadah')[i].querySelector('img').src = x.namaBPH[i].foto;
    }
    for (let i = 0; i <= 15; i++){
        document.querySelectorAll('.bp-nama')[i].textContent = x.namaBP[i].nama;
        document.querySelectorAll('.bp-foto')[i].querySelector('img').src = x.namaBP[i].foto;
        document.querySelectorAll('.bp')[i].style.display = x.namaBP[i].display;
    }
}

if (localStorage.selectedBidang === 'kominfo'){
    bidangContentLoad (bidangKominfo);
} else if (localStorage.selectedBidang === 'kema'){
    bidangContentLoad (bidangKema);
} else if (localStorage.selectedBidang === 'kastrat'){
    bidangContentLoad (bidangKastrat);
} else if (localStorage.selectedBidang === 'kewirus'){
    bidangContentLoad (bidangKewirus);
} else if (localStorage.selectedBidang === 'kestari'){
    bidangContentLoad (bidangKestari);
    document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
    document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
    document.querySelectorAll('.bph-container')[1].style.display = 'none';
} else if (localStorage.selectedBidang === 'kesma'){
    bidangContentLoad (bidangKesma);
} else if (localStorage.selectedBidang === 'pengmas'){
    bidangContentLoad (bidangPengmas);
} else if (localStorage.selectedBidang === 'litbang'){
    bidangContentLoad (bidangLitbang);
} else if (localStorage.selectedBidang === 'retro'){
    bidangContentLoad (bidangRetro);
    document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
    document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
    document.querySelectorAll('.bph-container')[1].style.display = 'none';
} else if (localStorage.selectedBidang === 'piptek'){
    bidangContentLoad (bidangPiptek);
} else if (localStorage.selectedBidang === 'siwa'){
    bidangContentLoad (bidangSiwa);
} else if (localStorage.selectedBidang === 'akpro'){
    bidangContentLoad (bidangAkpro);
}

//MODAL
var fotoBidang = document.querySelectorAll('.bidang-foto');
var modalBidang = document.querySelector('.modal-bidang-foto');
var modalFotoContainer = document.querySelector('.modal-foto-container');
var modalImg = document.querySelector('.modal-img');
var modalLeft = document.querySelector('.fa-chevron-left');
var modalRight = document.querySelector('.fa-chevron-right');
let modalOnProgress = false;
let currentModalImg;
let nextModalImg;

fotoBidang.forEach((a) => {
    a.querySelector('img').addEventListener('click', (e) => {
        currentModalImg = e.target;
        modalImg.src = currentModalImg.src;
        modalBidang.style.display = 'flex';
        anime({
            targets: modalBidang,
            opacity: 1,
            duration: 500,
            easing: 'easeOutQuad',
        })
    })
})

document.querySelector('.fa-times').addEventListener('click', (e) => {
    anime({
        targets: modalBidang,
        opacity: 0,
        duration: 500,
        easing: 'easeOutExpo',
        complete: () => {
            modalBidang.style.display = 'none';
        }
    })
})

modalRight.addEventListener('click', () => {
    if (!modalOnProgress){
        modalOnProgress = true;
        if (currentModalImg.classList.contains('last-foto')){
            nextModalImg = document.querySelector('.first-foto');
        } else{
            nextModalImg = currentModalImg.parentElement.nextElementSibling.querySelector('img');
        };
        anime.timeline({
            easing: 'easeInOutQuad',
            complete: () => {
                modalImg.src = nextModalImg.src;
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        modalOnProgress = false;
                        currentModalImg = nextModalImg;
                    }
                }).add({
                    targets: modalFotoContainer,
                    translateX: ['100', '0'],
                    opacity: [0, 1],
                    duration: 500,
                })
            }
        }).add({
            targets: modalFotoContainer,
            translateX: ['0', '-100'],
            opacity: [1, 0],
            duration: 500,
        })
    }
})
modalLeft.addEventListener('click', () => {
    if (!modalOnProgress){
        modalOnProgress = true;
        if (currentModalImg.classList.contains('first-foto')){
            nextModalImg = document.querySelector('.last-foto')
        } else{
            nextModalImg = currentModalImg.parentElement.previousElementSibling.querySelector('img');
        }
        anime.timeline({
            easing: 'easeInOutQuad',
            complete: () => {
                modalImg.src = nextModalImg.src;
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        modalOnProgress = false;
                        currentModalImg = nextModalImg;
                    }
                }).add({
                    targets: modalFotoContainer,
                    translateX: ['-100', '0'],
                    opacity: [0, 1],
                    duration: 500,
                })
            }
        }).add({
            targets: modalFotoContainer,
            translateX: ['0', '100'],
            opacity: [1, 0],
            duration: 500,
        })
    }
})

// LOGO BIDANG DI BIDANG TEMPLATE
var bidangTitle = document.querySelector('.logbid-bidang-title');
var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('img');
let currentLogo;
function bidangLoadTemplate (x, y){
    bidangTitle.textContent = x.namaBidang;
    bidangMainLogo.src = x.logoBidang;
    currentLogo = y.target.parentElement.className;
}

bidangLogo.forEach((a) => {
    a.addEventListener('mouseover', (e) => {
        if (!(currentLogo === e.target.parentElement.className)){
            onFade = true;
            if (e.target.parentElement.classList.contains('logbid-kominfo')){
                bidangLoadTemplate(bidangKominfo, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-kema')){
                bidangLoadTemplate(bidangKema, e);
            }
            else if (e.target.parentElement.classList.contains('logbid-kastrat')){
                bidangLoadTemplate(bidangKastrat, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-kewirus')){
                bidangLoadTemplate(bidangKewirus, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-kestari')){
                bidangLoadTemplate(bidangKestari, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-kesma')){
                bidangLoadTemplate(bidangKesma, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-pengmas')){
                bidangLoadTemplate(bidangPengmas, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-litbang')){
                bidangLoadTemplate(bidangLitbang, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-retro')){
                bidangLoadTemplate(bidangRetro, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-piptek')){
                bidangLoadTemplate(bidangPiptek, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-siwa')){
                bidangLoadTemplate(bidangSiwa, e);
            } 
            else if (e.target.parentElement.classList.contains('logbid-akpro')){
                bidangLoadTemplate(bidangAkpro, e);
            }
        }
    })
})

//bidangRefresh
document.querySelector('.logbid-logos').querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                var removeClass = ['.video-bidang', '.bph-sa-container', '.bp-container']
                var removeStyle = ['.bidang-logo img', '.bidang-title', '.bidang-proker', '.video-bidang-title', '.video-background', '.video-bidang', '.bph-text', '.sa-text', '.bp-text', '.bph-sa-container']
                var removeStyleForEach = ['.bph-foto', '.bph-nama', '.bph-jabatan', '.bp-foto', '.bp-nama', '.bph-container']
                
                for (let i = 0; i < removeClass.length; i++){
                    document.querySelector(removeClass[i]).classList.remove('active');
                }
                for (let i = 0; i < removeStyle.length; i++){
                    document.querySelector(removeStyle[i]).removeAttribute('style');
                }            
                for (let i = 0; i < removeStyleForEach.length; i++){
                    document.querySelectorAll(removeStyleForEach[i]).forEach((a)=>{
                        a.removeAttribute('style');
                    })
                }
                document.querySelector('.bidang-foto-container').querySelectorAll('div').forEach((a)=>{
                    a.removeAttribute('style');
                })
                if (a.classList.contains('logbid-kominfo')){
                    bidangContentLoad (bidangKominfo);
                    localStorage.selectedBidang = 'kominfo';
                } 
                else if (a.classList.contains('logbid-kema')){
                    bidangContentLoad (bidangKema);
                    localStorage.selectedBidang = 'kema';
                }
                else if (a.classList.contains('logbid-kastrat')){
                    bidangContentLoad (bidangKastrat);
                    localStorage.selectedBidang = 'kastrat';
                } 
                else if (a.classList.contains('logbid-kewirus')){
                    bidangContentLoad (bidangKewirus);
                    localStorage.selectedBidang = 'kewirus';
                } 
                else if (a.classList.contains('logbid-kestari')){
                    bidangContentLoad (bidangKestari);
                    localStorage.selectedBidang = 'kestari';
                    document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
                    document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
                    document.querySelectorAll('.bph-container')[1].style.display = 'none';
                } 
                else if (a.classList.contains('logbid-kesma')){
                    bidangContentLoad (bidangKesma);
                    localStorage.selectedBidang = 'kesma';
                } 
                else if (a.classList.contains('logbid-pengmas')){
                    bidangContentLoad (bidangPengmas);
                    localStorage.selectedBidang = 'pengmas';
                } 
                else if (a.classList.contains('logbid-litbang')){
                    bidangContentLoad (bidangLitbang);
                    localStorage.selectedBidang = 'litbang';
                } 
                else if (a.classList.contains('logbid-retro')){
                    bidangContentLoad (bidangRetro);
                    localStorage.selectedBidang = 'retro';
                    document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
                    document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
                    document.querySelectorAll('.bph-container')[1].style.display = 'none';
                } 
                else if (a.classList.contains('logbid-piptek')){
                    bidangContentLoad (bidangPiptek);
                    localStorage.selectedBidang = 'piptek';
                } 
                else if (a.classList.contains('logbid-siwa')){
                    bidangContentLoad (bidangSiwa);
                    localStorage.selectedBidang = 'siwa';
                } 
                else if (a.classList.contains('logbid-akpro')){
                    bidangContentLoad (bidangAkpro);
                    localStorage.selectedBidang = 'akpro';
                }
                setTimeout(() => {
                    anime.timeline({
                        easing: 'easeOutExpo',
                    }).add({
                        targets: '.section',
                        opacity: 1,
                        duration: 1000,
                    }).add({
                        targets: '.bidang-foto-container div',
                        duration: 500,
                        translateY: [40, 0],
                        opacity: [0, 1],
                        delay: (el, i) => {
                            return 100 * i;
                        },
                    }, '-=1000')
                }, 500)
            }
        }).add({
            targets: document.querySelectorAll('.section'),
            opacity: 0,
            duration: 1000,
            direction: 'reverse',
        })
    })
})