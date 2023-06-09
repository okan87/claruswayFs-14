//!----- Alternatif yöntem -----
//! Bu yönemde sadece gelirler kısmı localStorage' a saklanmistir.
//! Harcama listesi ise Sadece bellekte saklanmştir.

//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const temizleBtn = document.getElementById("temizle-btn")
const ekleFormu = document.getElementById("ekle-formu")
//? Sonuclar
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//? Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//? Tablo
const harcamaBody = document.getElementById("harcama-body")

//? Variables
let gelirler = 0
let giderler = 0

//! Ekle butonuna tiklanildi ise
ekleFormu.addEventListener("submit", (e) => {
  //? Formun sayfayı resetlemesini engelemek icini
  e.preventDefault()
  //? kullanıcı birden fazla gelir ekleyebilir
  gelirler = Number(gelirler) + Number(gelirInput.value)

  //? Formdaki inputlarin içeriklerini  sil.
  ekleFormu.reset()

  //? sonuc tablosundaki tüm degerleri güncelle
  hesaplaVeGuncelle()
})

//? sonuc tablosundaki tüm degerleri güncelleyen fonks.
const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler
  giderinizTd.innerText = giderler
  kalanTd.innerText = gelirler - giderler

  //? localStorage'deki gelir degerini güncelle
  localStorage.setItem("gelirler", gelirler)
}

//! ilk acilis sonrasinda calisir
window.addEventListener("load", () => {
  //? localStorage'daki gelir bilgisini ilk acilista oku
  gelirler = localStorage.getItem("gelirler") || 0
  //? DOM daki degeri guncelle
  gelirinizTd.innerText = gelirler

  //? Tarihi bugunun tarihi yap
  tarihInput.valueAsDate = new Date()
})

//! Temizle Butonuna tiklanildiginda calisir.
temizleBtn.addEventListener("click", () => {
  if (confirm("Silmek istedigine emin misiniz?")) {
    gelirler = 0
    giderler = 0
    harcamaBody.innerHTML = ""
    hesaplaVeGuncelle()
  }
})

//! harcama formu her submit edildiğinde calisir.
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? sayfayınin yenilenmesini engeller.
  harcamaBody.innerHTML += ` 
  <tr>
      <td>${tarihInput.value}</td>
      <td class="text-capitalize">${harcamaAlaniInput.value}</td>
      <td id="miktar-degeri">${miktarInput.value}</td>
      <td>
      <i class="fa-solid fa-trash-can text-danger" type="button"></i></td>
  </tr>`

  //? Yeni her gideri, giderler değişkenine ekler
  giderler = Number(giderler) + Number(miktarInput.value)

  //? DOM'daki degerleri güncelle
  hesaplaVeGuncelle()

  //! Formu resetleme islemleri
  harcamaFormu.reset() //? tüm input degerlerini siler
  tarihInput.valueAsDate = new Date() //?yeniden bugunun tarihi vermek icin
})

//! Harcama tablosunda herhangi bir alana tiklanildiginda calisir.
harcamaBody.addEventListener("click", (e) => {
  //? Tiklama sil butonlarindan geldi ise
  if (e.target.classList.contains("fa-trash-can")) {
    //? target'in en yakin tr'sinin id'si miktar-degeri olan elemanini sec ve icerisideki gider
    //? degerini (miktar) oku
    const miktar = e.target
      .closest("tr")
      .querySelector("#miktar-degeri").innerText

    //? silinen elemanin miktarini giderlerden düş (artik böyle bir harcama kalmadi)
    giderler -= Number(miktar)

    //? DOM'dan ilgili elemani sil
    e.target.parentElement.parentElement.remove()

    //? Sonuc tablosunu güncelle.
    hesaplaVeGuncelle()
  }
})
