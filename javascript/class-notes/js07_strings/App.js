// let str1 = "This is a string"
// let str2 = 'This is a string'
// let str3 = `This is a string`
// let str4 = new String("This is a string")

// // console.log(typeof str1) // string
// // console.log(typeof str2) // string
// console.log( str3) // string
// console.log( str4) // object

// console.log(str3[0])

// const str = 'Hello World';

// console.log(str.length)
// console.log(str[6])
// console.log(str[11])

// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

//tersten itere
// for(let i = str.length -1   ; i>=0; i--){
//     console.log(str[i])
//   }


// for(let i = str.length ; i>0; i--){
//     console.log(str[i-1])
//   }

// let str1 = 'I\'m a string'
// let str2 = "I'm a\0string\""
// console.log(str2)


// alert('1- ders \n2-Kayıt\n 3-pre-class')
// alert(`1- ders 
// 2-Kayıt 
// 3-pre-class`)


//slice

// let str1 = "Clarusway";
// let str2 = str1.slice(-3);
// console.log(str1)
// console.log(str2)
// console.log(str1.slice(-9,-3))

//substring
// let str= "Orange";
// console.log(str.substring(0,4))
// console.log(str.substring(4,0))
// console.log(str.substring(2)) // 2 den başla sona kadar git
// console.log(str.substring(str.length - 4)) //son 4 karakteri getir
// console.log(str.substring( - 4)) //çalışmaz

// console.log(str)

// let str2 = str.substring(0,4);
// console.log(str2)



//concat

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" ", str2, " ", str3)
// console.log(result)
// console.log(str3)

// let greet = 'Hello'

// console.log(greet.concat(' World'))
// console.log('Hello'.concat(' World'))


// let isim = prompt('İsminiz nedir?')


// console.log('Merhaba '.concat(isim))

// console.log('Merhaba ' + isim)



//includes

// let str1 = "Clarusway";

// console.log(str1.includes('l'))
// console.log(str1.includes('l',1)) //1.indexten aramaya başla
// console.log(str1.includes('l',2)) //2. indexten aramaya başla

//indexof
// let str1 = "Clarusway";

// console.log(str1.indexOf('a')) //2
// console.log(str1.indexOf('a',3)) //7
// console.log(str1.indexOf('l',3)) // -1 İçerisinde bulunamadı


//örnek

// let email=prompt("email giriniz")
// console.log(email.includes("@"));

// let email = prompt("Enter your email")

// if (email.indexOf("@") === -1) {
//   console.log("Invalid email")
// } else{
//     console.log('Valid email')
// }

// function findCount(source, search) {
//     let count = 0; // counter will start from 0
//     let position = source.indexOf(search) // first search
  
//     while (position !== -1) {// as long as we find search string, loop will go on 
//       count++ // increase the counter
//       position = source.indexOf(search, ++position) // search again, from where we stop +1
//     }
//     return count
//   }
    
//   let str = 'You do not know what you do not know until you know.';
//   console.log (findCount(str, "know")); // 3


//lastIndexof

// let str = "Hello John, welcome to Clarusway.";

// console.log(str.lastIndexOf("o")); // 21

// console.log(str.lastIndexOf("o", 6));// 4
// console.log(str.lastIndexOf("O", 6));// -1

// console.log(str.indexOf("o"));// 4

//search()

// let str = 'You do not KNOW what you do not know until you know.';

// console.log (str.search("know"));  // 32

// console.log (str.search(/know/)); // 32 with regular expression

// console.log (str.search(/know/i)); // 11 (i means not case sensitive)
// console.log (str.search(/klow/i)); // -1 içerisinde yoksa -1 döner

// let str1 = 'hello World';
// const arama = /[A-Z]/; // A-Z arası bütün büyük harfler
// const arama2 = /[a-z]/; // A-Z arası bütün büyük harfler

// console.log(str1.search(arama))

//replace

// let str = "Mr Brown has a brown house and a brown car";

// let newStr = str.replace("brown", "red");
// let newStr2 = str.replace(/brown/i, "red"); // casesensitivite ignore eder
// let newStr3 = str.replace(/brown/ig, "red"); // ne kadar varsa değiştirir.
// let newStr4 = str.replace(/brown/g, "red"); // küçük brownların tümünü değiştirir.

// console.log(newStr);
// console.log(newStr2);
// console.log(newStr3);
// console.log(newStr4);


//replaceAll

// let str = "Mr Brown has a brown house and a brown car";

// console.log(str.replaceAll('Brown', 'red')) // sorguyu uyan tüm sonuçları değiştirir.


//split stringi array e çevirir.

// let str = "Welcome to: Full Stack";

// // console.log(str.split())
// // console.log(str.split(' '))
// // console.log(str.split(':'))
// // console.log(str.split('Full'))
// // console.log(str.split('full'))

// let arr = str.split(' ')

// console.log(arr)
// console.log(str)

// toLowercase & toUpperCase

// let str = "Welcome to Full Stack";
// let str = "ĞŞİüöÇççççüüğğşşiiiööçç";
// console.log(str.toLowerCase());
// console.log(str.toLocaleLowerCase()) 

// console.log(str.toUpperCase());
// console.log(str.toLocaleUpperCase('TR'));


//trim

// let str = "     Welcome to Full Stack    ";
// console.log(str)
// console.log(str.trim()) // Hem balştaki hem sondaki boşlukları temizler
// console.log(str.trimStart()) // Baştaki boşlukları temizler
// console.log(str.trimEnd()) // sondaki boşlukları temizler


// startsWith & endWith

// let str = "clarusway@Clarusway.com is our e-mail address";

// console.log(str.startsWith("clarusway"))
// console.log(str.startsWith("Clarusway"))
// console.log(str.startsWith("Clarusway",10))

// let email = "clarusway@Clarusway.com"

// console.log(email.endsWith('com'))


// chaining

let str = "         Clarusway Full Stack"

let str1 = str.trim() // Clarusway Full Stack

let str2 = str1.slice(0,9) // Clarusway

let str3 = str2.toUpperCase() // CLARUSWAY

console.log(str3) // CLARUSWAY


console.log(str.trim().slice(0,9).toUpperCase())
