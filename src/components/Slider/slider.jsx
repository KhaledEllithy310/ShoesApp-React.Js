import { Component } from "react";
import { Carousel } from "react-bootstrap";
import './slider.css'
export class Slider extends Component {
  render() {
    return (
      <Carousel className="slider_container">
        <Carousel.Item>
          <img src="src/assets/images/slide1.jpg" alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="src/assets/images/slide2.jpg" alt="" />
        {/* <img src="../..//assets/images/slide3.png" alt="" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="src/assets/images/slide3.png" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
