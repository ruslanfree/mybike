'use strict'

//

const menuBtn = document.querySelector('.menu-btn');
let mobMenu = document.querySelector('.mob-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    if (menuBtn.classList.contains('open')) {
        mobMenu.classList.add('active');



    } else {
        mobMenu.classList.remove('active');

    }


});


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;

    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";

    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);


    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};


DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();


// const navLink = document.querySelectorAll('.nav-menu__list li a');

// navLink.forEach(item => {
//     item.addEventListener('click', function (e) {
//         e.preventDefault()
//         if (menuBtn.classList.contains('open') && mobMenu.classList.contains('active')) {
//             mobMenu.classList.remove('active');
//             menuBtn.classList.remove('open');
//         }
//         const blockId = item.getAttribute('href').substr(1)
//         document.getElementById(blockId).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })


// })
;

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();




new Swiper('.slider-body__container', {

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    effect: "fade",

    grabCursor: true,

    speed: 900,
    loop: true,
    autoplay: true,

    wrapperClass: 'slider-body__wrapper',

    slideClass: 'slider-body__slide',

});


new Swiper('.slider-rewiev__container', {

    navigation: {
        nextEl: '.rewiev__arrow--prev',
        prevEl: '.rewiev__arrow--next',
    },
    loop: true,
    autoplay: true,

    wrapperClass: 'slider-rewiev__wrapper',

    slideClass: 'slider-rewiev__slide',

    slidesPerView: '2',
    spaceBetween: 100,

    parallax: true,
    breakpoints: {

        300: {
            slidesPerView: 1,
            spaceBetween: 50
        },

        480: {
            slidesPerView: 1,
            spaceBetween: 50
        },

        640: {
            slidesPerView: 1,
            spaceBetween: 200
        },
        840: {
            slidesPerView: 2,
            spaceBetween: 100
        },

    },

});

new Swiper('.slider-bike__container', {

    navigation: {
        nextEl: '.bike__arrow--next',
        prevEl: '.bike__arrow--prev',
    },
    loop: true,
    autoplay: true,

    wrapperClass: 'slider-bike__wrapper',

    slideClass: 'slider-bike__slide',

    // slidesPerView: '4',
    // spaceBetween: 301,

    parallax: true,
    breakpoints: {

        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        940: {
            slidesPerView: 4,
            spaceBetween: 30
        },

    },

});



