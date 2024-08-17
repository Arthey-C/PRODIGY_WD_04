const menu=document.querySelector('.menu')
const menuList=document.querySelector('nav ul');
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu');
})



document.addEventListener("DOMContentLoaded", function() {
    const text = "A full stack web developer";
    let i = 0;
    const speed = 100; 

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
