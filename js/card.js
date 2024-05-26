document.querySelectorAll(".animation").forEach((cardYX__3d)=>{

    cardYX__3d.addEventListener("mousemove", (e) =>{
        let react = cardYX__3d.getBoundingClientRect();
        let mouseY = e.clientY - react.top - react.height /2;
        let angleY = -mouseY/react.height * 30;
        let mouseX = e.clientX - react.left - react.width /2;
        let angleX = mouseX/react.width * 30;
        cardYX__3d.style.transform = "perspective(1000px) rotateY(" + angleX +"deg) perspective(500px) rotateX(" + angleY +"deg)";
    })
    cardYX__3d.addEventListener("mouseenter", () =>{
        cardYX__3d.style.transform = "rotateY(0deg) rotateX(0deg)";
        console.log("se desactivo la funcion")
    })
    document.addEventListener("mouseleave", () =>{
        cardYX__3d.style.transform = "rotateY(0deg) rotateX(0deg)";
    
        console.log("se desactivo la funcion")
    })
    cardYX__3d.addEventListener("mouseleave", () =>{
        cardYX__3d.style.transform = "rotateY(0deg) rotateX(0deg)";
        console.log("se desactivo la funcion")
    })
    cardYX__3d.addEventListener("mouseenter", () =>{
        cardYX__3d.style.transform = "rotateY(0deg) rotateX(0deg)";
        console.log("se desactivo la funcion")
    })
})


let audio = document.getElementById("miAudio");
let boton = document.getElementById("btnAudioPlay");


boton.addEventListener("click", function(){
    if (audio.paused){
        audio.play();
        boton.textContent = "STOP"
    }  else {
        audio.pause();
        boton.textContent = "PLAY"
    }
})

let producto = document.getElementById("productoCarrusel");
producto.addEventListener("mouseover", () =>{
    let fondo =document.querySelector(".carrusel__video");
    fondo.classList.add("borroso");
})
producto.addEventListener("mouseleave", () =>{
    let fondo =document.querySelector(".carrusel__video");
    fondo.classList.remove("borroso");
})