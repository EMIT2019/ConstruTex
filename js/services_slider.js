let fence_item =  {
    dom_item: document.getElementById('fence_slider'),
    picture_sec: document.getElementById('fence_pictures'),
    status: 0
};

let painting_item = {
    dom_item: document.getElementById('painting_slider'),
    picture_sec: document.getElementById('painting_pictures'),
    status: 0
};

let remodeling_item = {
    dom_item: document.getElementById('remodeling_slider'),
    picture_sec: document.getElementById('remodeling_pictures'),
    status: 0
};

const open_galery_slider = (dom_slider_item, flag) => {
    if(dom_slider_item.status == 0){
        dom_slider_item.picture_sec.style.width = '70%';
        dom_slider_item.picture_sec.style.transitionDuration = '.5s';
        dom_slider_item.status = 1;
    } else if(dom_slider_item.status != 0 && flag != false) {
        dom_slider_item.picture_sec.style.removeProperty('width');
        dom_slider_item.status = 0;
    }
};

fence_item.dom_item.addEventListener('click', () => {
    open_galery_slider(fence_item, true);
});

painting_item.dom_item.addEventListener('click', () => {
    open_galery_slider(painting_item, true);
});

remodeling_item.dom_item.addEventListener('click', () => {
    open_galery_slider(remodeling_item, true);
});