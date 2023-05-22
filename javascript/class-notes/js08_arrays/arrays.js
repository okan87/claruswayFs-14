
// const arr = [100, 'CW', false]
// console.log(arr)

// const dizi = new Array(100, 'CW', true);

// console.log(dizi)


// const dizi2 = new Array(10)

// console.log(dizi2)

// const colors = ['Red','Green','Blue']

// console.log(colors[0])
// console.log(colors[colors.length - 1]) //son elaman
// console.log(colors[colors.length - 2]) //sondan ikinciye ulaşım.
// console.log(colors[-1]) //undefined
// console.log(colors[56]) //undefined


//Array is Array
// const colors = ['Red','Green','Blue'];
// console.log(typeof colors);

// console.log(Array.isArray(colors)) //true 
// console.log(colors instanceof Array) //true 


// const variables = '1';
// console.log(Array.isArray(variables)) //false 
// console.log(variables instanceof Array) //false 


//Strings immutable değiştirilemez
// let str = 'Brown';
// console.log(str[0])
// str[0]='b';
// console.log(str)

// str = 'brown'

//Arrayle mutable yani değiştirilebilir
// const colors = ['Red','Green','Blue'];

// colors[1] = 'yellow' //mevcudu değiştirir

// console.log(colors)


// //ekleme yapar
// colors[3]= 5

// console.log(colors)

// let c = 'Pink'

// colors[4] = c

// console.log(colors)

// const colors = ['Red','Green','Blue'];

// colors[6] = 2
// console.log(colors)
// console.log(colors.length)
// console.log(colors[3])

// colors[100] = 'Pink';

// console.log(colors)


//primitiveler
/* let a = 5;
let b = a;
console.log(a)
console.log(b)

a= 6;
console.log(b)

b=a
console.log(b) */

//non-primitiveler

/* let arr1 = [1,2,'Three',false];

const arr2 = arr1;

// console.log(arr1)
// console.log(arr2)

// arr1[0]=0

// console.log(arr1)
// console.log(arr2)

const c = ['2'];
console.log(c)

console.log(Boolean(c))

const d = ['2']
console.log(c == d) //false çünkü adresleri farklı

console.log(arr1 == arr2) // true çünkü adresler aynı

 arr1 = ['four'] //let ile tanımlandığı için onaylanır

 arr2 = ['four'] // const ile tanımlandığı için onay verilmez */



 //Array metodları

//  const colors = ['Red','Green', 'Blue','Yellow','Brown'];

/* const cls = colors.slice() // orjinal array in içeriğini kopyalar

console.log(colors)
console.log(cls)

colors[0] = 'Black'

console.log(colors)
console.log(cls) */

// console.log(colors.slice(2,4)) //Blue yellow
// console.log(colors.slice(-2)) //yellow Brown
// console.log(colors.slice(2)) // ['Blue', 'Yellow', 'Brown']
// console.log(colors.slice(8)) // [] limit dışı
// console.log(colors.slice(-2,1)) // [] hatalı indexleme
// console.log(colors.slice(-3,-1)) // ['Blue', 'Yellow']


//Push ()

// const colors = ['Red','Green'];
// console.log(colors.length)

// let c = 'White';

// // const d = colors.push('Blue',2023,c)

// console.log(colors.push('Blue',2023,c))
// // colors.push(2023)

// // console.log(colors.length)
// // console.log(d + ' d')


// const car = ['Audi', 'BMW']

// const car2 = ['Ford', 'Tesla', 'Mercedes']

// car.push(car2) //['Audi', 'BMW', ['Ford', 'Tesla','Mercedes']] array in tamamını tek bir eleman olarak gönderir
// car.push(...car2) //['Audi', 'BMW', 'Ford', 'Tesla','Mercedes'] diğer arrayin her elemanını ayrı ayrı dahil eder.

// console.log(car[2][2]) //Mercedes çıkar



//pop 

// const car = ['Audi', 'BMW']

// console.log(car.pop()) //BMW yi siler consola yazdırır

// const silinen = car.pop()

// console.log(silinen)

// console.log(car.pop())


//unshift

// const colors = ['Green','Blue']

// console.log(colors.unshift('Red')) //yeni oluşan array in uzunluğunu verir.
// console.log(colors) //['Red', 'Green', 'Blue']

// const car = ['Audi', 'BMW']
// const car2 = ['Ford', 'Tesla', 'Mercedes']

// car.unshift(car2) // 2. array i tek array olarak başa ekler. [['Ford', 'Tesla', 'Mercedes'],'Audi', 'BMW']
// // car.unshift(...car2) // her elemanı ayrı ayrı başa ekler. ['Ford', 'Tesla', 'Mercedes','Audi', 'BMW']

// console.log(car)

//shift

// const colors = ['Red','Green', 'Blue','Yellow','Brown'];

// console.log(colors.shift()) //İlk elemanı siler, sildiği değeri döndürür.

// console.log(colors)


//splice

// const colors = ['Red','Green', 'Blue','Yellow','Brown']

//Eleman silme
// console.log(colors.splice(2,1)) // 2. index e git 1 eleman sil
// console.log(colors.splice(2)) // 2. index e git sonuna kadar sil

// console.log(colors)

//Eleman ekleme

// console.log(colors.splice(2,0, 'White')) //2. indexe git 0 elaman sil white ı ekle. Silmediği için [] döner.

// console.log(colors)


//Eleman değiştirme

// console.log(colors.splice(3,1,'Pink'))
// console.log(colors.splice(3,2,'Pink','Black')) //3 e git 2 elaman sil yerine uenilerini ekle. Silinenler aarray olarak döner

// console.log(colors)


//concat

// let color1 = [ 'red', 'green']
// const color2 = ['blue', 'orange']
// const color3 = [10, true]

// // const joinedArray = color1.concat(color2, color3)
// // console.log(color1) 
// // const destr = color1.push(...color2, ...color3)
// // console.log(color1) 

// color1 = color1.concat('Black',color2,2)
// console.log(color1)

//indexof lastindexof

/*  const colors = ['Red','Green', 'Blue','Brown','Green']
// console.log(colors.indexOf('Green'))//1
// console.log(colors.indexOf('Green',3)) //4
// console.log(colors.indexOf('green')) //-1 bulamazsa
console.log(colors.lastIndexOf("Green")); //4
console.log(colors.lastIndexOf("Green",-2)); //1
console.log(colors.lastIndexOf("Green",3)); //1
console.log(colors.lastIndexOf("green")); //-1 

console.log(colors[colors.indexOf("Green")])
 */

//reverse
// const colors = ['Red','Green', 'Blue','Green','Brown','yellow']
// colors.reverse() //orjinal array i değiştirir.
// console.log(colors)


//join 

// const arr = [ 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y' ]

// console.log(arr.join()) // C,l,a,r,u,s,w,a,y

// console.log(arr.join("")) // Clarusway

// console.log(arr.join("-")) // C-l-a-r-u-s-w-a-y
// console.log(arr)

//orjinal array bozulmaz. Array ii stringe çevirir


//sort

// const arr = [ 55, 5, 22, 2, 11, 1, 111 ]
// arr.sort()
// console.log(arr)

// // ascending sorting
// arr.sort((a,b) => a-b)
// console.log(arr) // [ 1, 2, 5, 11, 22, 55, 111 ]

// // descending sorting
// arr.sort((a,b) => b-a) //numeritik olarak sıralar
// console.log(arr) // [ 111, 55, 22, 11, 5,  2,  1 ]

//includes
/* const arr = [ 'red', 'blue', 'Purple', "white", "orange" ]

console.log(arr.includes('blue')) // true

console.log(arr.includes('Blue')) // false

console.log(arr.includes('blue', 2)) // false */


//Nested Arrays

const arr = [1, true, [6, 7, 8], [3, 'Red', 5] ]
arr.sort()
// arr[2].splice(1,1,'yellow')
// console.log(arr.length)

// console.log(arr[0]) // 1

// console.log(arr[2]) // [3, 'Red', 5]
// console.log(arr[3]) // [6, 7, 8]

// console.log(arr[2][0]) // 3
// console.log(arr[2][1]) // Red
// console.log(arr[2][2]) // 5

// console.log(arr[3][2]) //8


//ek bilgi

// const arr = ['Red','Green',,,,,'Blue']

console.log(arr)