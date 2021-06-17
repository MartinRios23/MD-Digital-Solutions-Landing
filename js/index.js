var open = false;
var video = false;

/** 
	 * @description Obtiene el elemento openMenú y al cumplir la condición, añade la clase
     * active y cambia su estado. Al volver a hacer click en el botón si no está en su estado
     * original, remueve la clase.
	 * @version 1.0
	 * @returns true or false
	 */
function openMenu(){
    var menu = document.getElementById("openMenu");
    if(open === false){
        menu.classList.add("active");
        open = true;
    } else {
        menu.classList.remove("active");
        open = false;
    }
}


/** 
	 * @description Obtiene el elemento videoContainer y al cumplir la condición, añade la clase
     * activeVideo y cambia su estado. Al volver a hacer click en el botón si no está en su estado
     * original, remueve la clase y pausa el video.
	 * @version 1.0
	 * @returns true or false
	 */

function openVideo(){
    var videoContainer = document.getElementById("videoContainer");
    var video = document.getElementById("video")
    if(open === false){
        videoContainer.classList.add("activeVideo");
        open=true;
    } else {
        videoContainer.classList.remove("activeVideo");
        video.pause();
        open = false;
    }

}