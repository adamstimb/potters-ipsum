import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Container } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar"
import Branding from './branding.png'

export default function NavbarTop() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Branding} alt="IntSol" width="140px" />
                    Potters Ipsum
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="github.com">Github</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}