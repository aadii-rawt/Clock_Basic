setInterval( ()=>{
    let dte = new Date();

    let hr = dte.getHours();
    let min = dte.getMinutes();
    let sec = dte.getSeconds();
    let d = dte.toDateString();
    
    document.getElementById("clock").innerHTML = `${hr}hr : ${min}min : ${sec}sec <br> on ${d}`;}
,1000);
