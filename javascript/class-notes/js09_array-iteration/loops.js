//* ============================================
//*                FOR LOOP
//* ============================================

console.log("**** LOOPS IN ARRAYS ***")

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
// const grades = [55, 77, 23, 89, 100, 44, 33, 45]

// let sum = 0
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i]
//   //   console.log(sum)
// }

// console.log("AVG:", (sum / grades.length).toFixed(2))

//?-------------- ÖRNEK -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
// const grades = [55, 77, 23, 89, 100, 44, 33, 45]
// const lessThan50 = []
// const equalOrBiggerThan50 = []

// for (let j = 0; j < grades.length; j++) {
//   if (grades[j] < 50) {
//     lessThan50.push(grades[j])
//   } else {
//     equalOrBiggerThan50.push(grades[j])
//   }
// }
// console.log(lessThan50)
// console.log(equalOrBiggerThan50)
// console.log(grades)

//?-------------- ÖRNEK (FOR-IN) -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]
const lessThan50 = []
const equalOrBiggerThan50 = []

for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : equalOrBiggerThan50.push(grades[i])
}

console.log(lessThan50)
console.log(equalOrBiggerThan50)
console.log(grades)

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const findStudent = (name) => {
  let counter = 0

  for (let student of students) {
    student === name.toLowerCase() && counter++ //* aranan, dizinin icindeki elemana esitse
  }

  return counter === 0
    ? `${name} can not be found`
    : `${name} found ${counter} times`
}

console.log(findStudent("Ahmet"))
console.log(findStudent("AHMET"))
console.log(findStudent("ismet"))
console.log(findStudent("Alihan"))
