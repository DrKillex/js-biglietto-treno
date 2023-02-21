Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


step 1 - creare variabile numKM richiedendo in forma di numero tramite prompt i kilometri da percorrere

step 2 - creare variabile age richiedendo in forma di numero tramite prompt quanti anni ha la persona che usera il biglietto

step 3 - creare variabile ticketPrice il cui valore sia il calcolo del costo del biglietto tramite il calcolo di variabile (numKM * 0,21).toFixed(2);

step 4 - produrre un output del costo nel seguente modo:

            SE age < 18 

                    ticketPrice = ticketPrice - (ticketprice / 100 * 20).toFixed(2);

                    stampa ticketPrice

            ALTRIMENTI SE age >= 65
                
                    ticketPrice = ticketPrice - (ticketprice / 100 * 40).toFixed(2);

                    stampa ticketPrice

            ALTRIMENTI

                    stampa ticketPrice