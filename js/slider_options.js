let slider_section = document.getElementById('list_slider');
let options_section = document.getElementById('options');
let counter = 0, movement = 0, change_time = 6;

let pic1 = document.getElementById('op1');
let pic2 = document.getElementById('op2');
let pic3 = document.getElementById('op3');
let pic4 = document.getElementById('op4');
let pic5 = document.getElementById('op5');

function timer_slide(){
    if(counter != change_time) {

        counter++;

    } else if(counter == change_time){
        counter = 0
        if(movement == -400){
            movement = 0;
        } else {
            movement -= 100;
        }

        slider_section.style.marginLeft = `${movement}%`;
        slider_section.style.transitionDuration = '2s';
    }
    setTimeout(timer_slide, 1000);
};

pic1.addEventListener('click', () => {
    movement = 0;
    counter = 0;
    slider_section.style.marginLeft = `${movement}%`;
    slider_section.style.transitionDuration = '2s';
});

pic2.addEventListener('click', () => {
    movement = -100;
    counter = 0;
    slider_section.style.marginLeft = `${movement}%`;
    slider_section.style.transitionDuration = '2s';
});

pic3.addEventListener('click', () => {
    movement = -200;
    counter = 0;
    slider_section.style.marginLeft = `${movement}%`;
    slider_section.style.transitionDuration = '2s';
});

pic4.addEventListener('click', () => {
    movement = -300;
    counter = 0;
    slider_section.style.marginLeft = `${movement}%`;
    slider_section.style.transitionDuration = '2s';
});

pic5.addEventListener('click', () => {
    movement = -400;
    counter = 0;
    slider_section.style.marginLeft = `${movement}%`;
    slider_section.style.transitionDuration = '2s';
});

timer_slide();