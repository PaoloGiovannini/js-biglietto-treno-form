const generaBigliettoDom = document.getElementById('generaBiglietto');

const etaDom = document.getElementById('eta');

const kmDom = document.getElementById('km');

const prezzoKm = 0.21;


generaBigliettoDom.addEventListener('click',

    function() {

        let eta = etaDom.value;
        let km = kmDom.value;
        let prezzoTotale = km * prezzoKm;

        if (eta < 18){
            prezzoTotale = prezzoTotale - (prezzoTotale /100 * 20);
        } else if (eta > 65) {
            prezzoTotale = prezzoTotale - (prezzoTotale /100 * 40);
        } 

        console.log(prezzoTotale);
    }

)

