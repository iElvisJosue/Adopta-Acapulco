var VerCertificaciones = document.querySelector(".VerCertificaciones");
var VerPerfil = document.querySelector(".Perfil");
var IconoPerfil = document.querySelector(".IconoPerfil");
var CerrarPerfil = document.querySelector(".CerrarPerfil");
var Izquierda = document.querySelector(".Izquierda");
var Derecha = document.querySelector(".Derecha");
var x = 0;

var TamanoCertificaciones = VerCertificaciones.clientWidth;
Izquierda.style.display = "none";

if(TamanoCertificaciones <= 180){
    Derecha.style.display = "none";
}
Derecha.addEventListener("click", function(){
    switch (x){
        case 0: 
            VerCertificaciones.classList.add("VerCertificacionesCompletas");
            Izquierda.style.display = "block";
            x++;
            break;
        case 1: 
            VerCertificaciones.classList.add("VerCertificacionesCompletas2");
            x++;
            break;
        case 2: 
            VerCertificaciones.classList.add("VerCertificacionesCompletas3");
            Derecha.style.display = "none";
            x++;
            break;          
    }
});
Izquierda.addEventListener("click", function(){
    switch (x){
        case 1: 
            VerCertificaciones.classList.remove("VerCertificacionesCompletas");
            Izquierda.style.display = "none";
            x--;
            break;
        case 2: 
            VerCertificaciones.classList.remove("VerCertificacionesCompletas2");
            x--;
            break;          
        case 3: 
            VerCertificaciones.classList.remove("VerCertificacionesCompletas3");
            Derecha.style.display = "block";
            x--;
            break;          
    }
});

IconoPerfil.addEventListener("click", function(){
    VerPerfil.classList.add("VerPerfil")
});
CerrarPerfil.addEventListener("click", function(){
    VerPerfil.classList.remove("VerPerfil")
});