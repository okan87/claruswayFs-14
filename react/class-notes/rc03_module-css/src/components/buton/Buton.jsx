// import "./Buton.css"
import ButonStyle from "./Buton.module.css"

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]


const Buton = ({ btn }) => {
  return (
    // <div className="title">
    <div className={ButonStyle.title}>
      {/* <button className="btn-blue">{btn}</button> */}
      <button className={ButonStyle["btn-blue"]}>{btn}</button>
    </div>
  )
}

export default Buton
