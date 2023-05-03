//* Javascript Kodu */
// console.log("Localde bulunan script calisti")

// alert("Bu bir alert dir") /* Alert uygulmayı bloklar (Blocking Code)*/

// karar = confirm("Emin msiniz E/H")
// console.log(karar)

// console.warn("Bu bir uyarıdir")

// console.error("Eyvah hata olustu..")

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

//? ===================  CONST  ======================

console.log("APP JS RUNNING")

const pi = 3.14
console.log(pi)
console.log(typeof pi)

const sayi1 = "3"
console.log(typeof sayi1)

//! caught SyntaxError: Missing initializer in const declaration (at app.js:27:7)
// const deneme; //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme)

//! Uncaught TypeError: Assignment to constant variable.
// const number1 = 5
// number1 = 7 //? const ile tanimlanan degiskene sonradan atama yapilamaz

const varMi = true
const isOpen = false
console.log(isOpen, typeof isOpen)

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let language = "Java"
console.log(language, typeof language)

language = "Javascript"
console.log(language)

language = true //? atama
console.log(language)

language = 3.14
console.log(language)

let adet //? Js bir degiskenin türünü atanan degere gore belirler. Eger atama olmadıysa türu undefined olarak belirlenmiş olur.
console.log(adet) //?undefined

adet = "23" //? atama
console.log(typeof adet)

{
  //? Bir blok icerisinde degisken olustruduk
  let localDegisken = 5
  localDegisken = localDegisken + 1
  console.log(localDegisken)
}

//! Uncaught ReferenceError: localDegisken is not defined
console.log(localDegisken)
