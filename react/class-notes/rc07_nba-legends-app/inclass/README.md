# React Bootstrap

[Dökümanı görüntülemek için tıklayınız](https://react-bootstrap.netlify.app/docs/getting-started/introduction) <br>
[React Bootstrap Componentlerini görmek için tıklayınız](https://react-bootstrap.netlify.app/docs/components/accordion)
[React Bootstrap Componentlerini görmek için tıklayınız](https://react-bootstrap.netlify.app/docs/layout/grid)

React Bootstrap, popüler bir UI (Kullanıcı Arayüzü) bileşen kitaplığı olan Bootstrap'in React uygulamalarında kullanılmasını sağlayan bir entegrasyon kitidir.

React-Bootstrap, Bootstrap bileşenlerinin React kullanılarak tamamen yeniden uygulanmasıdır. Bootstrap.js ya da jQuery'ye bağımlılığı yoktur. React kurulumunuz varsa ve React-Bootstrap yüklüyse, ihtiyacınız olan her şeye sahipsiniz demektir.

JsDom veya jQuery kullanan yöntemler ve olaylar, DOM'u doğrudan manipüle ederek zorunlu olarak yapılır. Buna karşılık React, sanal DOM'u güncellemek için durum güncellemelerini kullanır. Bu şekilde, React-Bootstrap, Bootstrap işlevselliğini React'in sanal DOM'una dahil ederek daha güvenilir bir çözüm sağlar.

React Bootstrap'i kullanmak için, React uygulamanıza ilgili paketi (package) eklemeniz ve belgelere göre bileşenleri kullanmanız gerekir. Projenizin bağımlılıklarına React Bootstrap'i ekledikten sonra, örneklerde veya belgelerde verilen bileşenleri kullanarak uygulamanıza istediğiniz tasarımı ekleyebilirsiniz.

- Bileşen Tabanlı Yapı: React, bileşen tabanlı bir JavaScript kütüphanesidir. React Bootstrap, bu bileşen tabanlı yapının üzerine inşa edilmiştir. Bileşenler, kullanıcı arayüzünüzdeki farklı parçaları temsil eder ve yeniden kullanılabilirlik sağlar. React Bootstrap, Bootstrap bileşenlerini React bileşenleri olarak uygulamalarınıza entegre etmenizi sağlar. Örneğin, bir Button bileşeni, React Bootstrap ile kolayca oluşturulabilir ve kullanılabilir.

- Bootstrap Bileşenlerinin React Uyumlu Hale Getirilmesi: Bootstrap, popüler bir UI framework'tür ve birçok kullanışlı bileşen içerir. Ancak, Bootstrap orijinal haliyle React projelerinde doğrudan kullanılamaz. React Bootstrap, Bootstrap bileşenlerini React uyumlu hale getirir ve bu bileşenlerin React bileşenlerinin avantajlarını kullanmanıza olanak sağlar. Örneğin, React bileşenlerinde durum yönetimi kullanarak, dinamik ve etkileşimli bileşenler oluşturabilirsiniz.

- Dökümantasyon ve Örnekler: React Bootstrap, kullanıcılarının projelerine kolayca başlamalarını sağlamak için kapsamlı bir dökümantasyon ve örnekler sunar. Dökümantasyon, React Bootstrap'in nasıl kurulacağını, kullanılacak bileşenlerin özelliklerini ve nasıl kullanılacağını açıklar. Örnekler, tipik kullanım senaryolarını gösterir ve başlangıç noktası olarak kullanılabilir. Bu şekilde, React Bootstrap'i projenize entegre etmek ve bileşenleri doğru şekilde kullanmak daha kolay hale gelir.

- Responsive Tasarım: Bootstrap'in temel özelliklerinden biri, responsive (duyarlı) tasarımı desteklemesidir. Bu özellik, uygulamanızın farklı cihazlarda ve ekran boyutlarında uyumlu bir şekilde görüntülenmesini sağlar. React Bootstrap, Bootstrap'in responsive özelliklerini korur ve React bileşenleriyle birlikte kullanıldığında bile duyarlı bir kullanıcı arayüzü oluşturmanıza yardımcı olur.

- Kolay Özelleştirme: React Bootstrap, Bootstrap bileşenlerini kullanmanın yanı sıra, bu bileşenleri özelleştirmenize de olanak tanır. Bootstrap'in CSS sınıfları ve özelleştirme seçenekleri ile bileşenlerin görünümünü ve davranışını kolayca değiştirebilirsiniz. Ayrıca, React'in özellikleri sayesinde bileşenlerin durumunu ve davranışını programatik olarak yönetebilirsiniz.

React Bootstrap, React ve Bootstrap'i bir araya getirerek, güçlü bir kullanıcı arayüzü oluşturma deneyimi sunar. React'in bileşen tabanlı yapısı, Bootstrap bileşenlerini daha modüler hale getirir ve React'in güçlü özelliklerini kullanarak daha etkileşimli ve dinamik bir kullanıcı arayüzü oluşturmanızı sağlar.

## Projemize nasıl dahil edebiliriz?
```javascript
npm install react-bootstrap bootstrap
or
yarn add react-bootstrap bootstrap


// The following line can be included in your src/index.js or App.js file

import 'bootstrap/dist/css/bootstrap.min.css';
```

Artık projemize eklediğimize göre hem bootstrap özelliklerinden hem de react-bootstrap özelliklerini kullanmaya başlayabiliriz. 

Örneğin; bir buton elementi oluşturmak istiyorsunuz diyelim. Öncelikle ilgili sayfamızda React-Bootstrapten `Button` componentini import ediyoruz.
```jsx
import Button from 'react-bootstrap/Button';
...
```
Sonrasında aynı sayfa içerisinde artık Button componentini çağırıp kullanabiliriz.

```jsx
import Button from 'react-bootstrap/Button';

function MyButtonComp() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default MyButtonComp;

```
Button componenti html button elementinin sahip olduğu özellikleri içerisinde barındırıyor. Aynı zamanda `btn` classının sahip olduğu css özelliklerini içerisinde barındırıyor. React props mantığıyla da `Button` componentine ek özellikler kazandırabiliyoruz. React-Bootstrap componentlerinin alacağı props isimleri sabit belirlenmiştir. Bunları dökümandan öğrenebiliriz ([Button örneği için tıklayınız](https://react-bootstrap.netlify.app/docs/components/buttons#api)) veya node_modules klasörü içerisinden react-bootstrapi açıp içerisinden ilgili componente bakabiliriz(Dökümandan incelemenizi tavsiye ederim). 

### Responsive Grid yapısına örnekler:

##### Col ile Responsive Ayarı
Col, 6 breakpoints boyutunda (xs, sm, md, lg, xl ve xxl) sütun genişliklerini belirlemenizi sağlar. Her breakpoints için, yayılacak sütun miktarını belirtebilirsiniz.(Ölçüyü düz bootstrap mantığıyla veriyoruz. Yani `col-sm-8` ile `sm={8}` aynı ölçüye sahip olmuş oluyor. Yani sütunun o satırda ne kadar yer kaplamasını istiyorsanız ona göre değer veriyorsunuz. ) 
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={8} md={6} lg={4}>sm=8-md=6-lg=4</Col>
        <Col sm={8} md={6} lg={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;
```

##### Row'da Col Genişliklerini Ayarlama ile Responsive Ayarı

Row, 6 breakpoints boyutunda (xs, sm, md, lg, xl ve xxl) sütun genişliklerini belirlemenizi sağlar. Her breakpoints için, yan yana sığacak sütun miktarını belirleyebilirsiniz.(Ölçüyü satırda görüntülemek istediğiniz sayıya göre veriyorsunuz. Örneğin; xs ekranlarda her satırda 2 tane göster, md ekranlarda 4, lg ve sonrasında 6tane göster.)
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutExample() {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutExample;
```

##### Default 6 Breakpoints

| Breakpoint           | Class infix | Dimensions |
|----------------------|-------------|------------|
| X-Small              | xs          | <576px     |
| Small                | sm          | ≥576px     |
| Medium               | md          | ≥768px     |
| Large                | lg          | ≥992px     |
| Extra large          | xl          | ≥1200px    |
| Extra extra large    | xxl         | ≥1400px    |


## Nba Legends

### [filter işlemi](./src/components/CardContainer.jsx)

- İnputa girilen veriye göre ekranda gösterilen datanın değişmesi lazım. Datayı ekrana nerede basıyoruz ? CardContainer içerisinde. O zaman inputuda card container içerisinde oluşturabiliriz.

- Burada biizm örneğimizde filtreleme işlemi oyuncuların name bilgisine göre yapılıyor. Peki name e göre filtrelerken nasıl bir yol izleyeceğiz ?
- String metotlarını hatırlayalım. Bu metotlardan hangisi içerisine verdiğimiz karakterleri içerip içermediğini kontrol ediyordu ? includes() metodu. Bu metot içerisine yazılan veriyi sorguladığımız string içeriyorsa true döner içermiyorsa false döner. 

```javascript
  "araba".includes("a") => true
  "araba".includes("ar") => true
  "araba".includes("ara") => true
  "araba".includes("m") => false
```
- Biz de burada filtreleme işleminde sorgulayacağımız string name bilgisi olacak. name bilgisi inputta yazan veriyi içeriyorsa datayı ona göre filtrelemiş olacak. Ve bu kullanıcı her inputta değişiklik yaptığında olması gerekiyor. 
- Bu nedenle önce bize ne lazım inputtan gelen veri. inputtan veriyi anlık olarak nasıl yakalıyoruz ? onChange eventiyle anlık olarak değişiklikleri yakalayabiliyoruz. onChange de veriyi yakaladık ama her değişikliği algılayıp bunu ekrana yansıtacak bir şey lazım bize ama o ne ? Tabiki useState hooku. useState hooku reactta durum değişikliklerini takip eden ve o değişikliğe göre componenti yeniden render ettiren bir hook. 
```jsx
  const [search,setSearch] = useState("");

  ...

  return (
    <>
      <input type="search" onChange={(e)=> setSearch(e.target.value)}>
    </input>
  )
```
- O zaman biz de inputtan gelen veriyi state e aktarırsak her değişklikte componenti render ettirmiş oluruz. Component her render olduğunda da filteredData yeniden oluşturulacağı için yani yeniden tanımlanacağı için kolaylıkla ekrandaki değişikliği sağlamış oluyoruz.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```


### [Card Gösterilen Veriyi Değiştirme](./src/components/PlayerCard.jsx)

- Bizden beklenen her carda tıklandığında o cardda değişim olması. Bizim örneğimizde resim yerine statistic bilgilerinin cardda gösterilmesi veya tam tersi resmin cardda gösterilmesi. 
- Ve her tıklanıldığında da ilgili cardın yeniden render olması gerekiyor. Bunu da react da yapabilmek için useState hookuna ihtiyacımız var. Ve sadece tıklanan cardın değişmesi ve tekrar o carda tıklanılana kadar değişimin sabit kalması gerektiği için her cardın kendine ait bir durumu olması lazım. 
- Her cardın durumu olması için de datayı maplediğimizde her veri için bir component return edersek her carda ait stateleri o component içerisinde oluşturabiliriz. Çünkü veri sayısı ne kadarsa aslında o kadar component oluşturmuş olacağımız için o component içerisinde oluşturduğumuz stateler fonksiyonlarda her veri için ayrı ayrı tanımlanmış olacak. Böylelikle her carda ait durum oluşturabilmiş olacağız. Aksi takdirde veriyi datayı maplediğimiz yerde ekrana bassak elimizde tek bir state olacağı için hangi carda tıklarsak tıklayalım hepsi değişecektir.

- Bu nedenle datayı üst componentte mapleyip returnde her veri için alt component olan PlayerCard componentini çağırığ verileri props yoluyla ona göndereceğiz.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```

- Şimdi sıra her card için durumları oluşturmaya geldi. Burada nasıl bir durum oluşturacağız ? Carda tıklanıldığında yazılar gelcek tekrar tıklanıldığında resimler gelecek. Bu değişikliği takip etmek için useState e ihtiyacımız var. Ve değşikliği yapabilmemiz için onClick eventına ihtiyacımız var. 

```jsx
  const [showImg,setShowImg] = useState(true)
```

- State değiştikçe ilgili component render edileceği için bu state e göre bir mekanizma oluşturabiliriz. Bu mekanizmanın adı reactta **conditional rendering** . Bunu da JSX içerisinde [ternary operator](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--) ile yapabiliriz. Yani showImg statei true ise resim gösterilecek eğer false ise statisticler gösterilecek. Peki değişim nasıl olacak ? Yani click olduğunda ne olması gerekiyor. Ve click eventını nereye tanımlayacağız? Resme tıklandığında showImage false olacak, yazılara tıklandığında showImage true olacak. Peki ayrı ayrı onClick tanımlamak yerine bunu tek bir yerden tanımlayıp hem resim olduğunda hem yazı olduğunda aynı click çalışacak ve showImage stateini tam tersine çevirebilir miyiz ? TAbi ki çevirebiliriz. onClick eventına kapsayıcıya verip ve onClick içerisinde de `not !` operatörünün nimetlerinden yararlanırsak tek hamlede bu işlemi bitirebiliriz. Yani `setShowImage(!showImage)` dediğimizde true ise false yapacak, false ise true yapacak.

```jsx
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleToggle = () => setShowImage(!showImage);
  return (
    <Card className="player-card" onClick={handleToggle} role="button">
      {showImage ? (
        <Card.Img variant="top" src={img} height={"350px"} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start list-unstyled">
                🏀 {item}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
```