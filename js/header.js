let header = document.getElementById('header_section');
let btn_deploy_mob_menu = document.getElementById('btn_deploy_mob_menu');
let content_container = document.getElementById('main_content_container');
let home_menu_btn = document.getElementById('home_menu');
let service_menu_btn = document.getElementById('services_menu');
let contact_menu_btn = document.getElementById('contact_menu');
let viewport_sizes = {
    mobile: {
        higest_width: 430,
        lowest_width: 320  
    }
}

/*Script to move the window scroll based on the pushed button in the menu*/
const move_window = (offset) => {
    window.scroll({
        top: offset,
        left: 0,
        behavior: "smooth"
    })
};

let get_element_offset = (element_id) => {
    return document.getElementById(`${element_id}`).offsetTop - header.scrollHeight;
};

home_menu_btn.addEventListener('click', () => {
    move_window(
        get_element_offset('main_content_container')
    );
});

service_menu_btn.addEventListener('click', () => {
    move_window(
        get_element_offset('services_projects_section')
    )
});

contact_menu_btn.addEventListener('click', () => {
    move_window(
        get_element_offset('contact_us')
    );
});
/*Script to move the window scroll based on the pushed button in the menu*/

/*Script to fixed the menu to the top when scrolling*/
window.addEventListener('scroll', () => {
    if(window.innerWidth > viewport_sizes.mobile.higest_width) {
        if(window.scrollY > header.scrollHeight) {

            content_container.style.marginTop = `${header.scrollHeight}px`;
            header.classList.add('fixed_menu');
    
        } else if(window.scrollY == 0) {
    
            content_container.style.marginTop = '0px';
            header.classList.remove('fixed_menu');
    
        }
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 320 && window.innerWidth <= 430){
        content_container.style.marginTop = `0px`;
    }
});
/*Script to fixed the menu to the top when scrolling*/

/*Script to the mobile menu to appear from the left to right*/
btn_deploy_mob_menu.addEventListener('click', () => {
    if(window.innerWidth <= viewport_sizes.mobile.higest_width) {
        if(!header.classList.contains('fixed_menu_mob')) {
            btn_deploy_mob_menu.firstElementChild.src = 'assets/icons/close-icon.svg';
            btn_deploy_mob_menu.classList.remove('move_menu_button_back');
            btn_deploy_mob_menu.classList.add('move_menu_button');
            header.classList.remove('hide_fixed_menu_mob');
            header.classList.add('fixed_menu_mob');
        } else {
            btn_deploy_mob_menu.firstElementChild.src = 'assets/icons/menu-icon.svg';
            btn_deploy_mob_menu.classList.remove('move_menu_button');
            btn_deploy_mob_menu.classList.add('move_menu_button_back');
            header.classList.remove('fixed_menu_mob');
            header.classList.add('hide_fixed_menu_mob');
        }
    }
});
/*Script to the mobile menu to appear from the left to right*/