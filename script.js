let visibleMenu = false;
//se crea la funcion para ocultar o mostrar el menu
function mostrarOcultarMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList="responsive";
        visibleMenu = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion que aplica las animaciones de los skills
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Java");
        habilidades[3].classList.add("PHP");
        habilidades[4].classList.add("Csharp");
        habilidades[5].classList.add("Angular");
        habilidades[6].classList.add("Nodejs");
        habilidades[7].classList.add("Comunicacion");
        habilidades[8].classList.add("TrabajoEnEquipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[10].classList.add("Dedicacion");
        habilidades[11].classList.add("Responsabilidad");
        habilidades[12].classList.add("javascript");
    }
}
//detecto el scrool para aplicar la animacion de la barra de sklills
window.onscroll = function(){
    efectoSkills();
} 
//funcion para descargar cv pfd// 
function descargarPDF() {
    var link = document.createElement('a');
    link.href = 'cv/cv miguel_merged.pdf';
    link.download = 'cv miguel_merged.pdf';
    link.click();
}


//scrip boton pause//
