let gallery = document.getElementById('gallery_list');
let dom_elements_ids = {
    framing: document.getElementById('framing_service'), 
    drywall_taping: document.getElementById('drywall_service'),
    /*taping: document.getElementById('taping_service'),*/
    painting: document.getElementById('painting_service'),
    plumbing: document.getElementById('plumbing_service'),
    electricity: document.getElementById('electricity_service'),
    flooring: document.getElementById('flooring_service'),
    siding: document.getElementById('siding_service'),
    fence: document.getElementById('fencing_service')
}

const move_slider = (offset) => {
    gallery.style.transform = `translateX(${offset}%)`;
};

dom_elements_ids.framing.addEventListener('click', () => {
    move_slider(0);
});

dom_elements_ids.drywall_taping.addEventListener('click', () => {
    move_slider(-100);
});

/*dom_elements_ids.taping.addEventListener('click', () => {
    move_slider(-200);
});*/

dom_elements_ids.painting.addEventListener('click', () => {
    move_slider(-200);
});

dom_elements_ids.plumbing.addEventListener('click', () => {
    move_slider(-300);
});

dom_elements_ids.electricity.addEventListener('click', () => {
    move_slider(-400);
});

dom_elements_ids.flooring.addEventListener('click', () => {
    move_slider(-500);
});

dom_elements_ids.siding.addEventListener('click', () => {
    move_slider(-600);
});

dom_elements_ids.fence.addEventListener('click', () => {
    move_slider(-700);
});

