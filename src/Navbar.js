import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {Container} from "react-bootstrap";
import App from "./App";
import Features from './Features';
import Products from './Products';
import Login from './Login';
import Register from './Register';



const Navbar = () => {
    return (
        <Router>
            <div className="nav-container">
                <Container>
                    <Nav>
                        <Link to="/" className="mx-2"><Button>Home</Button></Link>
                        <Link to="/features" className="mx-2"><Button>Features</Button></Link>
                        <Link to="/products" className="mx-2"><Button>Products</Button></Link>
                        <Link to="/login" className="mx-2"><Button>Login</Button></Link>
                        <Link to="/register" className="mx-2"><Button>Register</Button></Link>
                    </Nav>

                    <Routes>
                        <Route path="/" exact component={App} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/products" component={Products} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Routes>
                </Container>
            </div>
        </Router>
    )
}

export default Navbar