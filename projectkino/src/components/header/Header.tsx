import React from "react";
import { Search } from "./Search";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

interface HeaderProps {
  setSearchData: (data: string) => void,
  currentUser: any,
  isAuthorized: boolean
}

const Header = (props: HeaderProps) => {
  const { currentUser, setSearchData, isAuthorized } = props;
  const handleLogOut = () => {
    localStorage.removeItem('jwtAccess');
    localStorage.removeItem('jwtRefresh');
    window.location.href = '/signin';
  }
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
            >
              <Link to={"/"} className="header-link">
                <NavDropdown.Item href="#action/3.1"><p><i className="bi bi-house"></i> Home</p></NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#action/3.2"><p><i className="bi bi-fire"></i> Trends</p></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><p><i className="bi bi-bookmark"></i> Favorites</p></NavDropdown.Item>
              <Link to={"/settings"} className="header-link">
                <NavDropdown.Item href="#action/3.4"><p><i className="bi bi-gear"></i> Settings</p></NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Link to={"/"} className="header-link">
            <Navbar.Brand>
              <span style={{ color: '#a840ff', fontSize: '32px' }}>pix</span>
              <span style={{ fontSize: '32px' }}>ema</span>
            </Navbar.Brand>
          </Link>

        </Navbar.Collapse>

        <Search setSearchData={setSearchData} />

        <Link to={`/signin`} className="header-link">
          {
            isAuthorized ?
              <div className="user">
                <button className="user-button">
                  {currentUser?.username.match(/\b\w/g)?.join('')}
                </button>
                <span className="user-name">{currentUser?.username}</span>
                <button className="sign-button" onClick={handleLogOut}>
                  <i className="bi bi-box-arrow-in-right sign-icon"></i>
                </button>
              </div>
              :
              <div className="user">
                <button className="user-button">
                  <i className="bi bi-person"></i>
                </button>
                <span className="user-name">Войти</span>
                <button className="sign-button">
                  <i className="bi bi-box-arrow-in-right sign-icon"></i>
                </button>
              </div>
          }
        </Link>

      </Container>
    </Navbar>
  )
}

export { Header };