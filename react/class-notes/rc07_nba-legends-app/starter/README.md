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

