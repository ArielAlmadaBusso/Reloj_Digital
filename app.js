const mostrarReloj= ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min= formatoHora(fecha.getMinutes());
    let sec= formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML=`${hr} : ${min} : ${sec}`
    
    const meses=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    const dias=['DOM','LUN','MAR','MIE','JUE','VIE','SAB']

    let diaSemana=dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];
    let año= fecha.getFullYear()
    let fechaTexto = `${diaSemana} ${dia} ${mes} ${año}`

    document.getElementById('fecha').innerHTML=fechaTexto;
}
    
// Con la funcion Set Interval nos mu
const formatoHora=(hora)=>{
    if(hora<10){
        hora = '0'+hora;
    }
    return hora
}

setInterval(mostrarReloj, 1000)