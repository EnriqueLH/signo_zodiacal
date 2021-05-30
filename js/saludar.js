let nombre = document.getElementById('nombre');
let mes = document.getElementById('mes');
let dia = document.getElementById('dia');
let enviar = document.getElementById('enviar');

enviar.addEventListener('click', () => {
    let signo = "";
    let descripcion_signo = "";
    // && -> AND            || -> OR
    /* ENERO 20 – FEBRERO 18 -> Acuario */
    if ((mes.value.toUpperCase() == "ENERO" && dia.value >= 20 && dia.value <= 31) || (mes.value.toUpperCase() == "FEBRERO" && dia.value >= 1 && dia.value <= 18)) {
        signo = "Acuario";
    }
    /* FEBRERO 19 – MARZO 20 -> Piscis */
    if ((mes.value.toUpperCase() == "FEBRERO" && dia.value >= 19 && dia.value <= 29) || (mes.value.toUpperCase() == "MARZO" && dia.value >= 1 && dia.value <= 20)) {
        signo = "Piscis";
    }
    /* MARZO 21 – ABRIL 19 -> Aries */
    if ((mes.value.toUpperCase() == "MARZO" && dia.value >= 21 && dia.value <= 31) || (mes.value.toUpperCase() == "ABRIL" && dia.value >= 1 && dia.value <= 19)) {
        signo = "Aries";
    }
    /* ABRIL 20 – MAYO 20 -> Tauro */
    if ((mes.value.toUpperCase() == "ABRIL" && dia.value >= 20 && dia.value <= 30) || (mes.value.toUpperCase() == "MAYO" && dia.value >= 1 && dia.value <= 20)) {
        signo = "Tauro";
    }
    /* MAYO 21 – JUNIO 20 -> Géminis */
    if ((mes.value.toUpperCase() == "MAYO" && dia.value >= 21 && dia.value <= 31) || (mes.value.toUpperCase() == "JUNIO" && dia.value >= 1 && dia.value <= 20)) {
        signo = "Géminis";
    }
    /* JUNIO 21 – JULIO 22 -> Cáncer */
    if ((mes.value.toUpperCase() == "JUNIO" && dia.value >= 21 && dia.value <= 30) || (mes.value.toUpperCase() == "JULIO" && dia.value >= 1 && dia.value <= 22)) {
        signo = "Cáncer";
    }
    /* JULIO 23 – Agosto 22 -> Leo */
    if ((mes.value.toUpperCase() == "JULIO" && dia.value >= 23 && dia.value <= 31) || (mes.value.toUpperCase() == "Agosto" && dia.value >= 1 && dia.value <= 22)) {
        signo = "Leo";
    }
    /* Agosto 23 – SEPTIEMBRE 22 -> Virgo */
    if ((mes.value.toUpperCase() == "Agosto" && dia.value >= 23 && dia.value <= 31) || (mes.value.toUpperCase() == "SEPTIEMBRE" && dia.value >= 1 && dia.value <= 22)) {
        signo = "Virgo";
    }
    /* SEPTIEMBRE 23 – OCTUBRE 22 -> Libra */
    if ((mes.value.toUpperCase() == "SEPTIEMBRE" && dia.value >= 23 && dia.value <= 30) || (mes.value.toUpperCase() == "OCTUBRE" && dia.value >= 1 && dia.value <= 22)) {
        signo = "Libra";
    }
    /* OCTUBRE 23 – NOVIEMBRE 21 -> Escorpio */
    if ((mes.value.toUpperCase() == "OCTUBRE" && dia.value >= 23 && dia.value <= 31) || (mes.value.toUpperCase() == "NOVIEMBRE" && dia.value >= 1 && dia.value <= 21)) {
        signo = "Escorpio";
    }
    /* NOVIEMBRE 22 - DICIEMBRE 21 -> Sagitario */
    if ((mes.value.toUpperCase() == "NOVIEMBRE" && dia.value >= 22 && dia.value <= 30) || (mes.value.toUpperCase() == "DICIEMBRE" && dia.value >= 1 && dia.value <= 21)) {
        signo = "Sagitario";
    }
    /* DICIEMBRE 22 – ENERO 19 -> Capricornio */
    if ((mes.value.toUpperCase() == "DICIEMBRE" && dia.value >= 22 && dia.value <= 31) || (mes.value.toUpperCase() == "ENERO" && dia.value >= 1 && dia.value <= 19)) {
        signo = "Capricornio";
    }
    if (signo == "Cáncer" || signo == "Escorpio" || signo == "Piscis") {
        descripcion_signo = "eres una persona que ama comunicarse y entablar relaciones con otras personas.";
    }
    if (signo == "Aries" || signo == "Leo" || signo == "Sagitario") {
        descripcion_signo = "eres una persona apasionada, dinámica y temperamental.";
    }
    if (signo == "Tauro" || signo == "Virgo" || signo == "Capricornio") {
        descripcion_signo = "eres una persona conservadora y realista, pero también emocional.";
    }
    if (signo == "Géminis" || signo == "Libra" || signo == "Acuario") {
        descripcion_signo = "eres una persona pensadora, amigable, intelectual, comunicativa y analítica.";
    }
    let texto = "Hola " + nombre.value + ", naciste el " + dia.value + " de " + mes.value.toUpperCase() + " y tu signo es " + signo + ", por lo tanto " + descripcion_signo;
    if (signo == "" || descripcion_signo == "") {
        texto = "No pudimos identificar tu signo, vuelve a ingresar tus datos.";
    }
    alert(texto);
});