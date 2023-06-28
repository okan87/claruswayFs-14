//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.
import "./Content.css"

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.
import birdBlue from "./img/bird-blue.jpeg"

const Content = () => {
  //? Local style objesi (Harici bir dosyadan da import edilebilir)
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  }

  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  }

  return (
    <main>
      {/* Inline CSS (Cift suslu ile key-value yapisi ile stil verilebilir) */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React is JS library</p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_640.jpg"
        alt="bird"
      />
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_640.jpg"
        alt=""
      />

      {/* <img src="./img/bird-blue.jpeg" alt="bird-blue" /> */}
      <img src={birdBlue} alt="bird-blue" />

      {/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}
      <img src="./assets/dandelion.jpeg" alt="dandelion" />

      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, illum.
      </p>

      <h4 style={parStyle}>Bu bir h4</h4>

      <h3 className="content-h3">Bu bir h3 elementtir</h3>
    </main>
  )
}

export default Content
