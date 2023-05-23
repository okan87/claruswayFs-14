//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500]

//* KLASIK FOR
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i])
}
console.log("*********")

//* FOREACH
prices.forEach((p) => console.log(p))

console.log("*********")
prices.forEach((p, i) => console.log("DEGER:", p, "INDIS:", i))

//?-------------- ÖRNEK -------------------
//?  Dizideki toplam fiyati hesaplayalim.
let sum = 0
prices.forEach((price) => (sum += price))

console.log("SUM:", sum)

