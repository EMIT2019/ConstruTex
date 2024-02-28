const  dom_pictures_section = document.getElementById('gallery_list');

const folder = "gallery_images"; 

let btn_load_pictures = document.getElementById('btn_load_more_pic');
let loaded_pictures = [];

const pagePictures = (index, to_load) => {
    for(let i = index; i < to_load; i++){
        try {
            fill_slider(dom_pictures_section, loaded_pictures[i].pic_url)
        } catch(ex) {
            console.log(ex);
        }
    }
}

const load_gallery = (dom_element_list, pictures_folder) => {
    let rev_url = '';
    let pictures_count = 0;
    $.ajax({
        url: `../assets/${pictures_folder}`,
        success: function(data){
           $(data).find("a:contains(.jpg)").each(function(){
                pictures_count++;
                rev_url = `assets/${pictures_folder}/pic${pictures_count}.jpg`;
                loaded_pictures.push(
                    {
                        pic_url: rev_url
                    }
                );
           })
        },
        complete: function(){
            let to_load = 5;
            let index = 0;
            dom_pictures_section.style.height = `${dom_pictures_section.offsetHeight + 160}px`;
            pagePictures(index, to_load);
            $('.gallery_list li').css('opacity', '1');

            load_image();

            const remove_button = () => {
                if(to_load > pictures_count) {
                    btn_load_pictures.style.display = 'none';
                }
            }

            btn_load_pictures.addEventListener('click', () => {
                
                index += 5;
                if(to_load < pictures_count) {
                    to_load += 5;
                    remove_button();
                } else {
                    to_load = pictures_count;
                }

                if(to_load != pictures_count) {
                    console.log(dom_pictures_section.offsetHeight);
                    dom_pictures_section.style.height = `${dom_pictures_section.offsetHeight + 160}px`;
                    pagePictures(index, to_load);
                    setTimeout(() => {
                        $('.gallery_list li').css('opacity', '1');
                    }, 800)
                }

                load_image();
            });

            window.addEventListener('resize', () => {
                $('.gallery_list').css('height', 'fit-content');
            });
        }
    })
}

load_gallery(dom_pictures_section, folder);

const load_image = () => {
    $(document).ready(function(){
        document.querySelectorAll('.gallery_list li .image_preview').forEach(image => {
            image.onclick = () => {
                document.querySelector('.full_image_view').style.display = 'block';
                document.querySelector('.full_image_view img').src = image.getAttribute("src");
            }
        })
        
        document.querySelectorAll('.gallery_list li .image_preview').forEach(image => {
            image.onclick = () => {
                document.querySelector('.full_image_view').style.display = 'block';
                document.querySelector('.full_image_view img').src = image.getAttribute("src");
            }
        })

        document.querySelector('.full_image_view span').onclick = () => {
            document.querySelector('.full_image_view').style.display = 'none';
        }
    });
};

const fill_slider = (dom_item, url) => {
    let list_gallery_item = document.createElement('li');
    let image_container = document.createElement('img');
    let eye_icon_image = document.createElement('img');

    eye_icon_image.classList.add('preview_eye_icon');
    eye_icon_image.setAttribute('alt', 'eye_icon_image');
    eye_icon_image.setAttribute('src', 'assets/icons/eye-solid.svg');

    image_container.setAttribute('src', url);
    image_container.setAttribute("class", "image_preview col-lg-12");

    list_gallery_item.appendChild(eye_icon_image);
    list_gallery_item.setAttribute("class", "col-lg-2");
    list_gallery_item.appendChild(image_container);
    dom_item.appendChild(list_gallery_item)
}