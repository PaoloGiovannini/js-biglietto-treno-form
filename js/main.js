const generaBigliettoDom = document.getElementById('generaBiglietto');

const resettaBigliettoDom = document.getElementById ('resettaBiglietto')

const etaDom = document.getElementById('eta');

const kmDom = document.getElementById('km');

const nomeCognomeDom = document.getElementById ('nomeCognome');

const nomeDom = document.getElementById('nome');

const tipoBigliettoDom = document.getElementById('tipoBiglietto');

const CarrozzaDom = document.getElementById('Carrozza');

const codicePrenotazioneDom = document.getElementById('codicePrenotazione');

const costoBigliettoDom = document.getElementById('costoBiglietto');

const prezzoKm = 0.21;

const bigliettoDom = document.getElementById('biglietto');


generaBigliettoDom.addEventListener('click',

    function() {

        let eta = etaDom.value;
        let km = parseInt(kmDom.value);
        const valoreNome = nomeCognomeDom.value;
        let prezzoTotale = km * prezzoKm;

        if (eta == "minorenne"){
            prezzoTotale = prezzoTotale - (prezzoTotale /100 * 20);
            tipoBigliettoDom.innerHTML = "Sconto 20% per minorenni";

        } else if (eta == "senior") {
            prezzoTotale = prezzoTotale - (prezzoTotale /100 * 40);
            tipoBigliettoDom.innerHTML = "Sconto 40% per over65";
        } else{
            tipoBigliettoDom.innerHTML = "Biglietto standard";
        }

        bigliettoDom.classList.remove('d-none');
        
        nomeDom.innerHTML = valoreNome;

        costoBigliettoDom.innerHTML = `${prezzoTotale.toFixed(2)} €`;

        const carrozza = Math.floor(Math.random() * 10) + 1;
        
        CarrozzaDom.innerHTML = carrozza;

        const codice = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        codicePrenotazioneDom.innerHTML = codice;
   
    }


)

resettaBigliettoDom.addEventListener('click',
    function(){
        bigliettoDom.classList.add('d-none');
        nomeCognomeDom.value = "";
        kmDom.value = "";
        etaDom.value = "maggiorenne";
    }
)

