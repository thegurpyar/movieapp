import React from 'react';
import Container from 'react-bootstrap/Container';
import  secureLocalStorage  from  "react-secure-storage";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';


export function NavigationBar(props) {

  const navigate=useNavigate()
  const baseurl="https://api.themoviedb.org/3/discover/movie?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="
  const tvurl="https://api.themoviedb.org/3/discover/tv?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky='top'className="navcontainer">
      <Container style={{marginLeft:"3%"}} >
        <Navbar.Brand href="#">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/");props.setUrl(baseurl)}}>Home</Nav.Link>

            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+28)}}>Action</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+12)}}>Adventure</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+16)}}>Animation</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+35)}}>Comedy</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+27)}}>Horror</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl)}}>Popular</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{navigate("/");props.setUrl(baseurl+10749)}}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/");props.setUrl(baseurl+878)}}>Sci-Fi</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Tv Shows" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl)}}>Popular</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+10759)}}>Action {"&"} Adventure</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+16)}}>Animation</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+80)}}>Crime</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+18)}}>Drama</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+10751)}}>Family</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+10762)}}>Kids</NavDropdown.Item>
              
              <NavDropdown.Item onClick={()=>{navigate("/tv");props.setTvurl(tvurl+10765)}}>Sci-Fi {"&"} Fantasy</NavDropdown.Item>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

