import { Form, Button, Container, Carousel } from "react-bootstrap";
const Carousell = () => {
 return (
 <>
 <Container style={{marginTop:"40px"}}>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/6a/8a/19/6a8a190ea7a60d7153abdcd7053fb564.jpg"
      alt="First slide"
      height="650px"
    />
    <Carousel.Caption>
      <h3>Bracelets</h3>
      <p>From our jewellery box to yours. If you’re looking for a beautiful finish to your look, day or night, why not browse our range of bracelets? The only hard part is stopping at just one.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/f6/97/80/f69780f9f3978b5c694b23c6c67d6183.jpg"
      alt="Second slide"
      height="650px"
    />

    <Carousel.Caption>
      <h3>Necklaces</h3>
      <p>Everyday essentials, elevated. From chains and chokers to pendants and t-bars, it's hard to pick a favourite. Whether you like to layer up your look or keep it minimal, make it meaningful with our collection of necklaces.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/5f/3b/7a/5f3b7a60b77b16d88898fe30114cf409.jpg"
      alt="Third slide"
      height="650px"
    />

    <Carousel.Caption>
      <h3>Rings</h3>
      <p>Making a bold statement or going for understated cool? Our rings are easy to stack or wear solo. Choose from delicate stacking bands, statement cocktail rings and meaningful gemstones.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
 </>
 );
 };
 export default Carousell;