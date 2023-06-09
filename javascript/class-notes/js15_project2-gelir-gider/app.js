//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//? Sonuc tablosu
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//? Haracama Tablosu
const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

//? Variables
let gelirler = 0

//? tum harcamalari saklayacak dizi (JSON)
let harcamaListesi = []

//?Events

//! Formun submit butonuna basildiginda
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engeller
  gelirler = gelirler + Number(gelirInput.value) //? string eklemiyi engelledik

  //? gelirlerin kalıcı olmasi icin localStorage a kopyaliyoruz
  localStorage.setItem("gelirler", gelirler)

  //? input degerini sifrladik
  ekleFormu.reset()

  //? Degisiklikleri sonuc tablosuna yazan fonks.
  hesaplaVeGuncelle()
})

//! Sayfa her yuklendikten sonra calisan event
window.addEventListener("load", () => {
  //? gelirler bilgisini local storage'dan okuyarak global degiskenimize yaz
  gelirler = Number(localStorage.getItem("gelirler"))

  //? localStroge'den harcama listesini okuyarak global dizimize saklıyoruz.
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []

  //? harcama dizisinin icindeki objleri tek tek DOMa yaziyoruz.
  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))

  console.log(harcamaListesi)
  //? Tarih inputunu bugun deger ile yukle
  tarihInput.valueAsDate = new Date()

  //? Degisen bilgileri hesapla ve DOM'a bas
  hesaplaVeGuncelle()
})

//! harcama formu submit edildiginde calisir
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engelle

  //? yeni harcama bilgileri ile bir obje olusutur
  const yeniHarcama = {
    id: new Date().getTime(), //? Sistem saatini (ms olarak) verir. Unique gibidir.
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  }

  //? yeni harcama objesini diziye ekle
  harcamaListesi.push(yeniHarcama)

  //? dizisin son halini localStorage e gonder.
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

  harcamayiDomaYaz(yeniHarcama)

  hesaplaVeGuncelle()

  //? Formdaki verileri sil
  harcamaFormu.reset()
  tarihInput.valueAsDate = new Date()
})

const hesaplaVeGuncelle = () => {
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  )

  gelirinizTd.innerText = gelirler
  giderinizTd.innerText = giderler
  kalanTd.innerText = gelirler - giderler
}

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const { id, miktar, tarih, alan } = yeniHarcama
  harcamaBody.innerHTML += `
  <tr>
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
  </tr>
  `
}
//! Harcama tablosunda herhangi bir alana tiklanildiginda calisir.
harcamaBody.addEventListener("click", (e) => {
  // console.log(e.target)

  //? Tiklama sil butonlarindan geldi ise
  if (e.target.classList.contains("fa-trash-can")) {
    //? DOM'dan ilgili row'u sildik.
    e.target.parentElement.parentElement.remove()

    const id = e.target.id
    console.log(id)

    //? Dizideki ilgili objeyi sildik.
    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id)

    //? Silinmis yeni diziyi Local Storage aktardik.
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    //? her satir silindikten sonra yeni degerleri hesapla ve DOM'a yaz
    hesaplaVeGuncelle()
  }
})

//? temizle butonına basildigi zaman calis
temizleBtn.addEventListener("click", () => {
  if (confirm("Silmek istedigine emin misiniz?")) {
    harcamaListesi = [] //? RAM'deki harcama listesini sil
    gelirler = 0 //? RAM'deki gelirleri sil
    localStorage.clear() //? local straoge'daki tüm verileri sil
    harcamaBody.innerHTML = "" //? DOM'daki tüm harcamlar sil
    hesaplaVeGuncelle() //? sonuc tablosundaki (DOM) gelirler, giderler ve kalan degerleri sil.
  }
})
