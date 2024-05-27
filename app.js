let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 10000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 10000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    active = key;
    reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};


var myCarousel = document.querySelector('#myCarousel');

var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  next: 'carousel-control-next',
  wrap: false
})

// Получаем элементы слайдера
const slider3 = document.querySelector('.slider3');
const prevButton3 = document.querySelector('.prev-button3');
const nextButton3 = document.querySelector('.next-button3');
const slides3 = Array.from(slider3.querySelectorAll('img'));
const slideCount3 = slides3.length;
let slideIndex3 = 0;

// Устанавливаем обработчики событий для кнопок
prevButton3.addEventListener('click', showPreviousSlide3);
nextButton3.addEventListener('click', showNextSlide3);

// Функция для показа предыдущего слайда
function showPreviousSlide3() {
  slideIndex3 = (slideIndex3 - 1 + slideCount3) % slideCount3;
  updateSlider3();
}

// Функция для показа следующего слайда
function showNextSlide3() {
  slideIndex3 = (slideIndex3 + 1) % slideCount3;
  updateSlider3();
}

// Функция для обновления отображения слайдера
function updateSlider3() {
  slides3.forEach((slide, index) => {
    if (index === slideIndex3) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider3();