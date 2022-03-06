function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}