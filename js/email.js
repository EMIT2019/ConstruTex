let sent_email_btn = document.getElementById('btn_send');
let pop_up_message = document.getElementById('pop_message');
let progress_bar = document.getElementById('progress_bar');
let form = document.getElementById('contact_form');

const send_email = (params) => {

    emailjs.init("0WhRyJJco5NyCSQ_7");

    let full_name = `${params.name} ${params.lastname}`;

    let email_body = {
        from_name: full_name,
        to: 'construtexservices@gmail.com',
        subject: "I'm interested on your services.",
        message:  params.desc,
        contact_info: params.email
    }

    let service_id = "service_8x8j9ta";
    let template_id = "template_byy3apd";

    emailjs.send(service_id, template_id, email_body).then( res => {
        pop_up_message.classList.add('take_down_pop_up');
        progress_bar.classList.add('grow_progress_bar');
    }).catch();

    pop_up_message.classList.remove('take_down_pop_up');
    progress_bar.classList.remove('grow_progress_bar');
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let email_object;

    const captchaResponse = grecaptcha.getResponse();
    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    if(captchaResponse.length > 0){
        email_object = {
            name: params.get('name'),
            lastname: params.get('lastname'),
            email: params.get('email'),
            desc: params.get('description')
        }
        send_email(email_object);
    } else {
        throw new Error('captcha not completed.');
    }

    fetch('http://httpbin.org/post', {
        method: 'POST',
        body: params
    })
});