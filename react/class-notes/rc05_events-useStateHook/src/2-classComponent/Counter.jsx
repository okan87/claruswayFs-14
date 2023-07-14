//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================
import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)

    //!  State'e baslangic degeri verdik.
    this.state = {
      count: 0,
    }

    //? increment metodunun Counter class'ina baglanmasi (bind)
    //  this.increment = this.increment.bind(this)
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>
        <button onClick={() => this.setState({ count: 0 })}>CLR</button>
        <button onClick={this.decrement}>DEC</button>
      </div>
    )
  }
}

export default Counter
