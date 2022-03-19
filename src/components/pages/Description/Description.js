import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Table, Breadcrumb, Image } from "react-bootstrap";
import productList from "../../../Data/data";
import "./Description.scss";
// import { useParams } from "react-router-dom";

const Description = (props) => {
  let id = window.location.pathname.split("/")[2];
  console.log("url", id);
  const { productName, imageUrl, catogeries, image } = productList[id - 1];
  const [displayImage, setDisplayImage] = useState(image[0]);

  // const des = (id) => {
  //   const current = productList.filter((p) => p.productName === id);
  //   console.log("mmm", current);
  // };

  // let currnetId = parseInt(useParams().id);
  // let { currnetId } = useParams();
  // let index = props.productList.findIndex((pid) => pid.id == currnetId);
  // let pid = props.productList[index];
  // console.log("ddddd", currnetId, pid.id, pid.productName);

  useEffect(() => {
    window.scrollTo(0, 0);
    // des();
  }, []);

  return (
    <>
      <Helmet>
        <title>{productName}</title>
        <meta name="description" content={{ productName }} />
        <meta name="keywords" content={{ productName }} />
      </Helmet>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Breadcrumb style={{ marginTop: "20px" }}>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Revolving Light</Breadcrumb.Item>
              <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div
              style={{
                backgroundSize: "cover",
                height: "400px",
                backgroundImage: `url(../../${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></div>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col lg={5} md={5} sm={5} xs={12}>
            <section className="section-product-description">
              <div className="slider-images">
                <ul className="slider-images_list">
                  {image.map((item, index) => (
                    <li key={index}>
                      <Image
                        key={index}
                        onClick={() => setDisplayImage(item)}
                        src={`../../${item}`}
                        thumbnail
                        fluid
                      />
                    </li>
                  ))}
                </ul>
                <div className="slider-images_big">
                  <Image src={`../../${displayImage}`} rounded fluid />
                </div>
              </div>
            </section>
          </Col>
          <Col lg={7} md={7} sm={7} xs={12}>
            <section className="section-product-description">
              <h1 className="latest-product-title">{productName}</h1>
              <article>
                <p>
                  Revolving Lights is used in ambulance, police patrol, fire
                  tender, control panels and also many industrial applications.
                  Available Voltages: 12V. Available Colours: Red, amber or
                  yellow &amp; green.
                </p>

                <h3>Product Description</h3>

                <ul>
                  <li>Low noise motor no interference to radios</li>
                  <li>2.5 Mtrs. heavy cable with Lighter Plug.</li>
                  <li>Acralic glass</li>
                  <li>Powerfull Magnet Base</li>
                  <li>Can be used in any 12 volt vehicle</li>
                </ul>

                <Table responsive>
                  <tbody>
                    <tr>
                      <th colSpan="2">
                        <h3>General Features</h3>
                      </th>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>Auto Boss</td>
                    </tr>
                    <tr>
                      <td>Body Material</td>
                      <td>Steal</td>
                    </tr>
                    <tr>
                      <td>Magnet</td>
                      <td>Heavy Duty Magnet</td>
                    </tr>
                    <tr>
                      <td>Glass</td>
                      <td>Acralic</td>
                    </tr>
                    <tr>
                      <td>Item Weight</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Product Dimensions</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Item model number</td>
                      <td>AB-Revolving-Light</td>
                    </tr>
                    <tr>
                      <td>Power</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Voltage</td>
                      <td>12V/24V/220V/110V</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Red, Blue, Yellow &amp; Green</td>
                    </tr>
                    <tr>
                      <td>Mounting Type</td>
                      <td>Revolving</td>
                    </tr>
                  </tbody>
                </Table>

                <Table className="table">
                  <tbody>
                    <tr>
                      <th colSpan="2">
                        <h3>In the box</h3>
                      </th>
                    </tr>
                    <tr>
                      <td>Sales Package</td>
                      <td>1 Revolving Light</td>
                    </tr>
                    <tr>
                      <td>Pack of</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Description;
