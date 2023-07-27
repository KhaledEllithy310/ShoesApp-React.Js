import { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class ContactUs extends Component {
  render() {
    return (
      <div className="container py-3">
        <h2 className="text-center">contact us</h2>
        <Form method="GET">
          <div className="row">
            <div className="col-lg-6 my-3">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </div>
            <div className="col-lg-6 my-3">
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div className="col-lg-12 my-3">
              <InputGroup>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Message"
                />
              </InputGroup>
            </div>
            <div className="col-lg-12 my-3">
              <button className="btn btn-info w-100" type="submit">Send Message</button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
