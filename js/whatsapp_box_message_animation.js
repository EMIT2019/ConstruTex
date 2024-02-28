let whatsapp_button = document.getElementById('btn_whatsapp');

whatsapp_button.addEventListener('click', () => {
    let query_value = "Hey%20I'm%20interested%20in%20your%20services"
    window.open(`https://wa.me/50578552666?text=${query_value}`, '_blank');
})