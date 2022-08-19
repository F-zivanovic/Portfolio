// COUNTER EFFECT

let counters = document.querySelectorAll('.counter');

function counterUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 150);
            }
            else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

counterUp();

// PORTFOLIO SORT

const buttons = document.querySelectorAll('.portfolio button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const portfolioItems = document.querySelectorAll('.portfolio .portfolio-item')

        for (item of portfolioItems) {
            item.style.display = 'none';
        }

        for (item of portfolioItems) {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        }
    })
});

// SCROLL TO TOP
let scrollBtn = document.querySelector('.toTop');
scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
    myFunction();
}

function myFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".toTop").classList.remove('animate');
    } else {
        document.querySelector(".toTop").classList.add('animate');
    }
}