//step 1

const numKM = Number(prompt('inserire la distanza da percorrere'))

document.getElementById('km').innerHTML = `la distanza selezionata è: ${numKM} km`

//step 2

const age = Number(prompt('inserire eta possessore biglietto'))

document.getElementById('eta').innerHTML = `l'eta inserita è: ${age} anni`

//step 3

let ticketPrice = (numKM * 0,21).toFixed(2);

document.getElementById('prezzoTotale').innerHTML = `il prezzo iniziale del tuo biglietto è: ${ticketPrice} sesterzi`

//step 4

if (age < 18){

    ticketPrice = ticketPrice - (ticketPrice / 100 * 20).toFixed(2);

    document.getElementById('sconto').innerHTML = 'hai accesso allo sconto under18'

    console.log(ticketPrice)

} else if (age >= 65){

    ticketPrice = ticketPrice - (ticketPrice / 100 * 40).toFixed(2);

    document.getElementById('sconto').innerHTML = 'hai accesso allo sconto over65'

    console.log(ticketPrice)

} else {

    document.getElementById('sconto').innerHTML = 'nessuno sconto applicabile'

    console.log(ticketPrice)

}

document.getElementById('prezzo').innerHTML = `il prezzo finale del tuo biglietto è: ${ticketPrice} scellini del kenya`
