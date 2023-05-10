// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? 100 adet cikti veren kodu yaziniz.

// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-FS14`)
// }

// // for (let i = 1; i <= 100; i *= 2) {
// //   console.log(`${i}-FS14`)
// // }
// // 1 - FS14
// // 2 - FS14
// // 4 - FS14
// // 8 - FS14
// // 16 - FS14
// // 32 - FS14
// // 64 - FS14

// //? 1 den n kadar sayilari toplayan kodu yaziniz.

// const n = prompt("Enter your number")
// let sum = 0 //* Global degisken

// for (let i = 1; i <= n; i++) {
//   //! i lokal degiskendir
//   //   sum = sum + i
//   sum += i //* kisa hali
//   console.log(sum)
// }
// // console.log(i)  //! Error
// console.log(`SUM: ${sum}`)

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
//? Math.random() => 0 - 1 arasinda rasgele bir sayi üretir.

const adet = prompt("kac adet sayi uretmek istersiniz:?")

for (let sayac = 1; sayac <= adet; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100)
  //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`)
}
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i <= 10) {
  console.log(i)
  i++
}
console.log("BYE")

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// if (not1 < 0 || not1 > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz")
// }

//! --------- WHILE -----------
let not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")

while (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan küçük veya 100'den büyük olamaz")
  not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not1)

//! ------  DO - WHILE -------
let not2
do {
  not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
  // if (not < 0 || not > 100) {
  //   alert("Not 0'dan küçük veya 100'den büyük olamaz")
  // }
} while (not2 < 0 || not2 > 100)
console.log("Notunuz:", not2)

//! ------  FOR -------
let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
for (; not3 < 0 || not3 > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz")
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not3)
