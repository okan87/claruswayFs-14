//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

function Header() {
  //? JS
  return (
    <header>
      {/*  JSX */}
      <h1>Header</h1>
    </header>
  )
}

export default Header
