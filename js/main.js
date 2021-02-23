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

//index.html
function indexLoaded(e){
    //SCROLL ANIMATION
    if (window.innerWidth  < 768){
        anime.timeline({
        }).add({
            targets: '.logo-ime-container',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
        }).add({
            targets: '.logo-desc-flex',
            scale: [0, 1],
            delay: anime.stagger(100),
        }).add({
            targets: '.landing-title-grid',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
        }, '-=500').add({
            targets: '.landing-text',
            opacity: [0, 1],
            translateY: ['50', '0'],
            duration: 800,
        }, '-=400')
    } else {
        anime.timeline({
            easing: 'easeOutExpo'
        }).add({
            targets: '.logo-ime-container',
            opacity: [0, 1],
            duration: 1000,
        }).add({
            targets: '.landing-title-text',
            opacity: [0, 1],
            duration: 1000,
        }).add({
            targets: '.landing-img-kiri',
            scaleX: ['0', '1'],
            duration: 800,
        }, '-=800').add({
            targets: '.landing-img-kanan',
            scaleX: ['0', '1'],
            duration: 800,
        }, '-=800').add({
            targets: '.landing-text',
            opacity: [0, 1],
            translateY: ['50', '0'],
            duration: 800,
        }).add(navAnimate)
    }
    
    window.addEventListener('scroll', () => {
        var logoBidangPosition = document.querySelector('.logbid-logo').getBoundingClientRect().top;
        var youtubePosition = document.querySelector('.video-highlight').getBoundingClientRect().top;
        var artikelPosition = document.querySelector('.article-container').getBoundingClientRect().top;
        var socialMediaPosition = document.querySelector('.social-media-icons').parentElement.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;
    
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
        if (youtubePosition < screenHeight / 2){
            if (!(document.querySelector('.video-highlight').classList.contains('active'))){
                document.querySelector('.video-highlight').classList.add('active');
                if (window.innerWidth < 768) {
                    anime.timeline({
                    }).add({
                        targets: '.youtube-title-mobile',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }).add({
                        targets: '.video-highlight',
                        scale: [0, 1],
                        duration: 1500,
                    }, '-=400').add({
                        targets: '.youtube-desc',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=1200').add({
                        targets: '.youtube-thumbnail-title',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=300').add({
                        targets: '.video-thumbnail',
                        scale: [0, 1],
                        delay: anime.stagger(100),
                    }, '-=300').add({
                        targets: '.youtube-button',
                        scale: [0, 1],
                        duration: 500,
                    }, '-=200')
                } else {
                    anime.timeline({
                    }).add({
                        targets: '.video-highlight',
                        scale: [0, 1],
                        duration: 1500,
                    }).add({
                        targets: '.youtube-desc',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=400').add({
                        targets: '.youtube-thumbnail-title',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=400').add({
                        targets: '.video-thumbnail',
                        scale: [0, 1],
                        delay: anime.stagger(200),
                    }, '-=300').add({
                        targets: '.youtube-button',
                        scale: [0, 1],
                        duration: 500,
                    }, '-=900')
                }
            }
        }
        if (artikelPosition < screenHeight / 2){
            if (!(document.querySelector('.article-container').classList.contains('active'))){
                document.querySelector('.article-container').classList.add('active');
                anime.timeline({
                    easing: 'easeOutExpo',
                }).add({
                    targets: '.archive-landing-title',
                    opacity: [0, 1],
                    duration: 500,
                }).add({
                    targets: '.article-card',
                    opacity: [0, 1],
                    translateY: ['-100', '0'],
                    delay: anime.stagger(200),
                }).add({
                    targets: '.article-button',
                    scale: [0, 1],
                    duration: 500,
                })
            }
        }
        var screenHeightSocialMedia;
        if (window.innerWidth < 768){
            screenHeightSocialMedia = screenHeight / 3;
        } else {
            screenHeightSocialMedia = screenHeight / 2
        }
        if (socialMediaPosition < screenHeightSocialMedia){
            if (!(document.querySelector('.social-media-icons').classList.contains('active'))){
                document.querySelector('.social-media-icons').classList.add('active');
                anime({
                    targets: '.social-media-icons i',
                    scale: [0, 1],
                    delay: anime.stagger(150),
                })
            }
        }
    })
    
    //LANDING
    var logoMatahari = document.querySelector('.matahari')
    var descMatahari = document.querySelector('.logo-desc-matahari')
    var logoSerigala = document.querySelector('.serigala')
    var descSerigala = document.querySelector('.logo-desc-serigala')
    var logoKuas = document.querySelector('.kuas')
    var descKuas = document.querySelector('.logo-desc-kuas')
    var logoGelombang = document.querySelector('.gelombang')
    var descGelombang = document.querySelector('.logo-desc-gelombang')
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelectorAll('.logo-desc-container > div').forEach((a) => {
                a.removeAttribute('style');
                a.querySelector('h1').removeAttribute('style');
                a.querySelector('p').removeAttribute('style');
            })
        }
    })
    
    function matahariReveal(){
        descMatahari.style.display = 'flex';
        descMatahari.parentElement.classList.add('progress');
        descSerigala.classList.remove('active');
        descMatahari.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descMatahari.classList.add('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descMatahari.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function serigalaReveal(){
        descSerigala.style.display = 'flex';
        descSerigala.parentElement.classList.add('progress');
        descMatahari.classList.remove('active');
        descSerigala.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descSerigala.classList.add('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descSerigala.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function kuasReveal(){
        descKuas.style.display = 'flex';
        descKuas.parentElement.classList.add('progress');
        descGelombang.classList.remove('active');
        descKuas.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descKuas.classList.add('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descKuas.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function gelombangReveal(){
        descGelombang.style.display = 'flex';
        descGelombang.parentElement.classList.add('progress');
        descKuas.classList.remove('active');
        descGelombang.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descGelombang.classList.add('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descGelombang.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function matahariClose(){
        descMatahari.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descMatahari.style.display = 'none';
                descMatahari.classList.remove('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descMatahari.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function serigalaClose(){
        descSerigala.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descSerigala.style.display = 'none';
                descSerigala.classList.remove('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descSerigala.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function kuasClose(){
        descKuas.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descKuas.style.display = 'none';
                descKuas.classList.remove('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descKuas.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function gelombangClose(){
        descGelombang.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descGelombang.style.display = 'none';
                descGelombang.classList.remove('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descGelombang.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    
    function logoIMEAnimation (){
        logoMatahari.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.classList.contains('active')){
                    if (!descMatahari.classList.contains('active')){
                        if (!descMatahari.parentElement.classList.contains('progress')){
                            matahariReveal();
                        }
                    }
                } else {
                    descSerigala.style.display = '';
                    serigalaClose();
                    matahariReveal();
                }
            }
        })
        logoMatahari.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.parentElement.classList.contains('progress')){
                    matahariClose()
                }
            }
        })
        logoSerigala.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.classList.contains('active')){
                    if (!descSerigala.classList.contains('active')){
                        if (!descSerigala.parentElement.classList.contains('progress')){
                            serigalaReveal();
                        }
                    }
                } else {
                    descMatahari.style.display = '';
                    matahariClose();
                    serigalaReveal();
                }
            }
        })
        logoSerigala.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.parentElement.classList.contains('progress')){
                    serigalaClose();
                }
            }
        })
        logoKuas.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.classList.contains('active')){
                    if (!descKuas.classList.contains('active')){
                        if (!descKuas.parentElement.classList.contains('progress')){
                            kuasReveal();
                        }
                    }
                } else {
                    descGelombang.style.display = '';
                    gelombangClose();
                    kuasReveal();
                }
            }
        })
        logoKuas.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.parentElement.classList.contains('progress')){
                    kuasClose()
                }
            }
        })
        logoGelombang.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.classList.contains('active')){
                    if (!descGelombang.classList.contains('active')){
                        if (!descGelombang.parentElement.classList.contains('progress')){
                            gelombangReveal();
                        }
                    }
                } else {
                    descKuas.style.display = '';
                    kuasClose();
                    gelombangReveal();
                }
            }
        })
        logoGelombang.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.parentElement.classList.contains('progress')){
                    gelombangClose()
                }
            }
        })
    }
    
    if (window.innerWidth > 768){
        logoIMEAnimation();
    } else {
        window.addEventListener('resize', (e) => {
            if (window.innerWidth > 768){
                logoIMEAnimation();
            }
        })
    }
    
    //LOGBID
    var bidangTitle = document.querySelector('.logbid-bidang-title');
    var bidangDesc = document.querySelector('.logbid-bidang-desc');
    var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
    var bidangButton = document.querySelector('.bidang-button');
    var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('a');
    let onProgress = false;
    
    function bidangLoadLanding (a){
        bidangTitle.textContent = a.namaBidang;
        bidangDesc.textContent = a.deskripsiBidang;
        bidangMainLogo.src = a.logoBidang;
    }
    bidangLogo.forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (!onProgress){
                onProgress = true;
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        bidangButton.style.display = 'inline-block';
                        if (e.target.parentElement.classList.contains('logbid-kominfo')){
                            bidangLoadLanding(bidangKominfo);
                            localStorage.selectedBidang = 'kominfo';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kema')){
                            bidangLoadLanding(bidangKema);
                            localStorage.selectedBidang = 'kema';
                        }
                        if (e.target.parentElement.classList.contains('logbid-kastrat')){
                            bidangLoadLanding(bidangKastrat);
                            localStorage.selectedBidang = 'kastrat';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kewirus')){
                            bidangLoadLanding(bidangKewirus);
                            localStorage.selectedBidang = 'kewirus';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kestari')){
                            bidangLoadLanding(bidangKestari);
                            localStorage.selectedBidang = 'kestari';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kesma')){
                            bidangLoadLanding(bidangKesma);
                            localStorage.selectedBidang = 'kesma';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-pengmas')){
                            bidangLoadLanding(bidangPengmas);
                            localStorage.selectedBidang = 'pengmas';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-litbang')){
                            bidangLoadLanding(bidangLitbang);
                            localStorage.selectedBidang = 'litbang';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-retro')){
                            bidangLoadLanding(bidangRetro);
                            localStorage.selectedBidang = 'retro';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-piptek')){
                            bidangLoadLanding(bidangPiptek);
                            localStorage.selectedBidang = 'piptek';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-siwa')){
                            bidangLoadLanding(bidangSiwa);
                            localStorage.selectedBidang = 'siwa';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-akpro')){
                            bidangLoadLanding(bidangAkpro);
                            localStorage.selectedBidang = 'akpro';
                        }
                    }
                }).add({
                    targets: bidangMainLogo.parentElement,
                    opacity: [1, 0],
                    duration: 400,
                }).add({
                    targets: bidangTitle,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangDesc,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangButton,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200');
    
                setTimeout(() => {
                    anime.timeline({
                        easing: 'easeOutExpo',
                        complete: () => {
                            onProgress = false;
                        }
                    }).add({
                        targets: bidangMainLogo.parentElement,
                        translateY: ['-100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }).add({
                        targets: bidangTitle,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangDesc,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangButton,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200');
                }, 1200)
    
            }
        })
    })
}

// about.html
function aboutLoaded(e){
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