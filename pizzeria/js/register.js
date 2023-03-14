

// register nappulan functio 
function onregisterClick() {
    //haetaan evästeistä nimi ja salasana
    const nimi = document.getElementById("nimi").value
    const salasana = document.getElementById("salasana").value
    //katsotaan että nimi ja salasana ei ole tyhjä stringejä 
    if(nimi && salasana) {
        //laitetaan nimi ja salasana evästeisiin joka tulee olemaan inputti molemmista
        localStorage.setItem("nimi", nimi)
        localStorage.setItem("salasana", salasana)
        window.location.replace("index.html")
    } else {
        console.log("joo")
    }
}
