



import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import '../assets/css/design.css'
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Input,

} from "reactstrap";
import styles from  '../assets/css/forum.css'

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
          
            
              <span><Link to='/' target="_blank"> Tripaxel </Link> </span>
              
          
            
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="/home">
                    Tripaxel
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    
                  </button>
                </Col>
              </Row>
              
            </div>
            
        
        <Input placeholder="search" style={{width:'20ch'}}/>
      
      
            <Nav navbar>
              
            <NavItem className="p-0">
            <NavLink>
            
              <Link to="/forums" target="_blank">
              Forums
              </Link>
            </NavLink>
          </NavItem>


              <NavItem className="p-0">
                <NavLink>
                
                  <Link to="/about" target="_blank">
                  About Us
                  </Link>
                </NavLink>
              </NavItem>


              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  
                  Inspiration
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem href="">
                    
                    Travel Break
                  </DropdownItem>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/register-page">
                    
                    Beaches
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/">
                   
                    Mountains
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Heritage
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Weekend Guide
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Upcoming Festivals
                  </DropdownItem>
                  </BrowserRouter>

                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Honeymoon Packages
                  </DropdownItem>
                  </BrowserRouter>

                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Wildlife Tourism
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                   
                    Road trip
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Wildlife Tourism
                  </DropdownItem>
                  </BrowserRouter>

                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                   
                    Gateways Guide
                  </DropdownItem>
                  </BrowserRouter>

                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Luxury Travel
                  </DropdownItem>
                  </BrowserRouter>
                  <BrowserRouter>
                  <DropdownItem tag={Link} to="/profile-page">
                    
                    Explore More
                  </DropdownItem>
                  </BrowserRouter>


                </DropdownMenu>
              </UncontrolledDropdown>



              <UncontrolledDropdown nav scrollable>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={e => e.preventDefault()}
              >
                
                Publish Trip
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="">
                  
                  Create New
                </DropdownItem>
                <BrowserRouter>
                <DropdownItem tag={Link} to="/register-page">
                 
                  Upload
                </DropdownItem>
                </BrowserRouter>
                <BrowserRouter>
                <DropdownItem tag={Link} to="/register-page">
                  
                  Import Blog
                </DropdownItem>
                </BrowserRouter>
                
              </DropdownMenu>
            </UncontrolledDropdown>


              <NavItem>
                <Link
                  className="nav-link d-none d-lg-block"
                  color="default"
                  to='/login'
                >
                  Login
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;

