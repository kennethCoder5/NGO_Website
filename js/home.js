let image = document.getElementById('image');
let images = ['./img/poster/Banner_Innvasia-1.jpg', './img/poster/Banner_Innvasia-2.jpg', './img/poster/Banner_Innvasia-3.jpg', './img/poster/Banner_Innvasia-4.jpg']

setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 1200);