//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
//* =============================================================
import { useState, useEffect, useContext, useReducer } from "react"

const UseStateCounter = () => {
  //   let count = 0

  //! count adinda bir state tanimlamis olduk ve baslangic degerine 0 atadik.
  const [count, setCount] = useState(0)

  const handleInc = () => {
    // count = count + 1
    //! Bir state'in degeri sadece setter metodu ile olabilir.
    setCount(count + 1)
  }

  const handleDec = () => {
    if (count <= 0) {
      alert("count can not be less than 0")
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h2>USE STATE HOOK</h2>
      <h1>Count:{count}</h1>
      <button onClick={handleInc}>INC</button>
      <button onDoubleClick={() => setCount(0)}>CLR</button>

      {/* Eger setCount metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da count state'inin gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeninden setCount araciligi state'in guncellenmesine yol acar ve sonsuz donguye girer */}

      {/* <button onClick={handleDec}>DEC</button> */}
      <button onClick={() => count > 0 && setCount(count - 1)}>DEC</button>
    </div>
  )
}

export default UseStateCounter
