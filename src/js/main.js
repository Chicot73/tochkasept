//mobile menu

const burgerMob = document.getElementById('burger'),
    cross = document.getElementById('cross'),
    menuMob = document.querySelector('.header__burger-menu'),
    header = document.querySelector('.header'),
    darker = document.querySelector('.dark'),
    call = document.getElementById('call'),
    html = document.querySelector('html');

burgerMob.addEventListener('click', (e) => {
    menuMob.classList.add('active-mob');
    cross.classList.add('active-mob');
    burgerMob.classList.add('hidden-mob');
    header.classList.add('active-hedmob');
    html.style.overflow = 'hidden';
    darker.style.display = 'block';
    burgerMob.classList.remove('active-mob');
});

let burgerCloser = [call, cross].forEach(item => {
    item.addEventListener('click', (e) => {
        menuMob.classList.remove('active-mob');
        cross.classList.remove('active-mob');
        burgerMob.classList.add('active-mob');
        header.classList.remove('active-hedmob');
        html.style.overflow = 'scroll';
        darker.style.display = 'none';
        burgerMob.classList.remove('hidden-mob');
    })
});

//swiper-1

const swiper = new Swiper(".pervyj", {
    navigation: {
        nextEl: ".cases__nav-next",
        prevEl: ".cases__nav-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true
    }
});


//swiper-2

const swiper2 = new Swiper(".vtoroy", {
    slidesPerView: 1,
    spaceBetween: -30,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: ".feedback__nav-next",
        prevEl: ".feedback__nav-prev",
    }
});


//accordeon

let accordeon = document.querySelector('.accordeon'),
    questArr = document.querySelectorAll('.accordeon__question'),
    answArr = document.querySelectorAll('.accordeon__answer'),
    minusArr = document.querySelectorAll('.accordeon__minus');

accordeon.addEventListener('click', (e) => {
    const targ = e.target.closest('.accordeon__question');
    if (targ) {
        questArr.forEach((item, i) => {
            if (item === targ) {
                answArr[i].classList.toggle('accordeon__show');
                minusArr[i].classList.toggle('accordeon__plus');
            }
        })
    }
})


//mask and form



let telSelector = document.querySelector('input[type="tel"]');

const telValid = new Inputmask({
    mask: "+7(999)999-99-99",
    greedy: true
});

telValid.mask(telSelector);

let sendForm = function () {
    let formBtn = document.querySelector('button[type="submit"]');

    formBtn.addEventListener('click', (e) => {

        let form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let long = telSelector.value;
            let longNum = long.replace(/[^0-9]/g, ""); //удаляем из строки всё, кроме цифр

            if (longNum.length > 10) {
                document.getElementById('warning').style.display = "block";
                document.getElementById('warning').style.color = "#49ff0c";
                document.getElementById('warning').textContent = "Спасибо, мы свяжемся с Вами!";
            } else {
                document.getElementById('warning').style.display = "block";
            }
        })
    })
}

sendForm();

//Плавная прокрутка
function scrolltoFn() {
    //e.preventDefault();
    document.getElementById('form').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}



