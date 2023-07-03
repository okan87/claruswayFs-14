import Buton from "../buton/Buton"
// import "./Card.css"
import CardStyle from "./Card.module.css"

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = ({ lang, btn, img }) => {
  return (
    <div>
      <h1 className={CardStyle["title"]}>{lang}</h1>
      <img className={CardStyle["images"]} src={img} alt="image" />
      <Buton btn={btn} />
    </div>
  )
}

export default Card
