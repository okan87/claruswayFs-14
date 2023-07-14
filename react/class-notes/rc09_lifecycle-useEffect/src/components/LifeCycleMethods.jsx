//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olusturuldugunda, DOM'a basildiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olusturulmasi (constructor),
//* Bir componentin DOM agacina eklenmesinin hemen sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional) Bir componentin guncellenmesinin hemen sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React from "react"

class LifeCycleMethods extends React.Component {
  //! 1-) Bir componentin olusturulmasinda cagrilir
  constructor(props) {
    console.log("1 - constructor run")
    super(props)
    this.state = {
      count: 0,
    }
  }

  //! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
  componentDidMount() {
    //! Fetch, timer kurmak, network istegi
    console.log("3 - componentDidMount")
  }

  //! 4-) Bu metot ilk render haric diger tüm render'lardan sonra cagrilir.
  componentDidUpdate() {
    console.log("4 - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("5 - componentWillUnmount")
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  //! 2-) Her bir state yada prop degistiginde (render) cagrilir
  render() {
    console.log("2 - render run")
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    )
  }
}
export default LifeCycleMethods
