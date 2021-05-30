let nombre = window.prompt('Ingrese su nombre');
let mes = window.prompt('Ingrese su mes de nacimiento');
let dia = window.prompt('Ingrese su dia de nacimiento');

let signo = "";
let descripcion_signo = "";
// && -> AND            || -> OR
/* ENERO 20 – FEBRERO 18 -> Acuario */
if ((mes.toUpperCase() == "ENERO" && dia >= 20 && dia <= 31) || (mes.toUpperCase() == "FEBRERO" && dia >= 1 && dia <= 18)) {
    signo = "Acuario";
}
/* FEBRERO 19 – MARZO 20 -> Piscis */
if ((mes.toUpperCase() == "FEBRERO" && dia >= 19 && dia <= 29) || (mes.toUpperCase() == "MARZO" && dia >= 1 && dia <= 20)) {
    signo = "Piscis";
}
/* MARZO 21 – ABRIL 19 -> Aries */
if ((mes.toUpperCase() == "MARZO" && dia >= 21 && dia <= 31) || (mes.toUpperCase() == "ABRIL" && dia >= 1 && dia <= 19)) {
    signo = "Aries";
}
/* ABRIL 20 – MAYO 20 -> Tauro */
if ((mes.toUpperCase() == "ABRIL" && dia >= 20 && dia <= 30) || (mes.toUpperCase() == "MAYO" && dia >= 1 && dia <= 20)) {
    signo = "Tauro";
}
/* MAYO 21 – JUNIO 20 -> Géminis */
if ((mes.toUpperCase() == "MAYO" && dia >= 21 && dia <= 31) || (mes.toUpperCase() == "JUNIO" && dia >= 1 && dia <= 20)) {
    signo = "Géminis";
}
/* JUNIO 21 – JULIO 22 -> Cáncer */
if ((mes.toUpperCase() == "JUNIO" && dia >= 21 && dia <= 30) || (mes.toUpperCase() == "JULIO" && dia >= 1 && dia <= 22)) {
    signo = "Cáncer";
}
/* JULIO 23 – Agosto 22 -> Leo */
if ((mes.toUpperCase() == "JULIO" && dia >= 23 && dia <= 31) || (mes.toUpperCase() == "Agosto" && dia >= 1 && dia <= 22)) {
    signo = "Leo";
}
/* Agosto 23 – SEPTIEMBRE 22 -> Virgo */
if ((mes.toUpperCase() == "Agosto" && dia >= 23 && dia <= 31) || (mes.toUpperCase() == "SEPTIEMBRE" && dia >= 1 && dia <= 22)) {
    signo = "Virgo";
}
/* SEPTIEMBRE 23 – OCTUBRE 22 -> Libra */
if ((mes.toUpperCase() == "SEPTIEMBRE" && dia >= 23 && dia <= 30) || (mes.toUpperCase() == "OCTUBRE" && dia >= 1 && dia <= 22)) {
    signo = "Libra";
}
/* OCTUBRE 23 – NOVIEMBRE 21 -> Escorpio */
if ((mes.toUpperCase() == "OCTUBRE" && dia >= 23 && dia <= 31) || (mes.toUpperCase() == "NOVIEMBRE" && dia >= 1 && dia <= 21)) {
    signo = "Escorpio";
}
/* NOVIEMBRE 22 - DICIEMBRE 21 -> Sagitario */
if ((mes.toUpperCase() == "NOVIEMBRE" && dia >= 22 && dia <= 30) || (mes.toUpperCase() == "DICIEMBRE" && dia >= 1 && dia <= 21)) {
    signo = "Sagitario";
}
/* DICIEMBRE 22 – ENERO 19 -> Capricornio */
if ((mes.toUpperCase() == "DICIEMBRE" && dia >= 22 && dia <= 31) || (mes.toUpperCase() == "ENERO" && dia >= 1 && dia <= 19)) {
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
let texto = "Hola " + nombre + ", naciste el " + dia + " de " + mes.toUpperCase() + " y tu signo es " + signo + ", por lo tanto " + descripcion_signo;
if (signo == "" || descripcion_signo == "") {
    texto = "No pudimos identificar tu signo, vuelve a ingresar tus datos.";
}

alert(texto);