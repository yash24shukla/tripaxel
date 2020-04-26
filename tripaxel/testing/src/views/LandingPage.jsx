
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import '../assets/css/design.css'
import bigChartData from "../variables/charts.jsx";


class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <div>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We keep your tour <br />
                    <span className="text-white">in fun</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From AIOC
                    </p>
                    <Button
                      className="btn-W"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../assets/img/etherum.png")}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("../assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa nunc, iaculis sed quam ac, vehicula efficitur purus. Nulla facilisi. Suspendisse potenti. Praesent ac lacinia nunc, porta pharetra leo
                      </p>
                      <br />
                      <p>
                      Etiam placerat semper pulvinar. Ut tempus, nunc non maximus commodo, leo tellus dictum eros, in lobortis arcu lorem vitae lectus. 
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("../assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Your best benefit</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Title Here</h4>
                        <hr className="line-primary" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa nunc, iaculis sed quam ac, vehicula efficitur purus.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">Title Here</h4>
                        <hr className="line-warning" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa nunc, iaculis sed quam ac, vehicula efficitur purus.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Title Here</h4>
                        <hr className="line-success" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa nunc, iaculis sed quam ac, vehicula efficitur purus.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../assets/img/chester-wade.jpg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Travels</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa nunc, iaculis sed quam ac, vehicula efficitur purus.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Feature 1</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Feature 2</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Feature 3</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../assets/img/path2.png")}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Travels</h5>
                      <CardTitle tag="h2">Bookings</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={bigChartData.data}
                      options={bigChartData.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section>
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path3.png")}
            />
            
          </section>
          <Footer />
        </div>
        </div>
    );
  }
}

export default LandingPage;
