//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================
//! Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//! Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//! Cozum: Object Oriented Programming (ES5 and ES6)

//* Object Literals
console.log("**** Object Literals ****")

const book1 = {
  title: "The Karamazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
}
