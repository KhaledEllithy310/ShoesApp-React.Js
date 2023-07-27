import { Component } from "react";
import './aboutus.css'
export class AboutUs extends Component {
  render() {
    return (
      <div className="container aboutUs py-4">
        <div className="row">
        <div className="col-lg-6">
          <h2>About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
            expedita molestiae. Incidunt, quidem fuga est rem atque unde,
            tenetur autem iure quisquam vero ullam officiis, illum fugit natus
            cum iusto.
          </p>
        </div>
        <div className="col-lg-6">
            <img src="src/assets/images/shoe (2).jpg" alt="" />
        </div>
      </div>
      </div>
    );
  }
}
