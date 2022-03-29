import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slides.css";
const Slides=()=>{

    return(
       <>
       <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.azurecollection.com/media/catalog/product/cache/0c3c32002aa365f06196aa884c40e694/t/h/thechedimuscatheader.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
     src="https://www.berjayahotel.com/sites/default/files/colombo_30.jpg"
      
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.siamar.de/fileadmin/user_upload/Hotels/dubai01/988/1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ghmhotels.com/wp-content/uploads/CMU-Overview-Water-Gardens06-1.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.mrandmrssmith.com/images/767x288/4391452-one-and-only-the-palm-hotel-dubai-united-arab-emirates.jpg"
      
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </>
    )
}
export default Slides