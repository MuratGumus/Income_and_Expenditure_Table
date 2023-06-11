//? Selectors
const ekleBtn = document.getElementById('ekle-btn');
const gelirInput = document.getElementById('gelir-input');
const ekleFormu = document.getElementById('ekle-formu');;

const gelirinizTd = document.getElementById('geliriniz');;
//? Variables
let gelirler = ""



//?Events

ekleFormu.addEventListener("submit", (e)=>{
    e.preventDefault()
    gelirler = Number(gelirler) + Number(gelirInput.value)
    
    ekleFormu.reset()

    hesaplaVeGuncelle()
})


//? Functions

const hesaplaVeGuncelle = () => {
gelirinizTd.innerText = gelirler
} 