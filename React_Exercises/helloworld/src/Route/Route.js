import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import HelloWorld from '../App'
import GreetCard from '../GreetCard'
import SuperOverLeague from '../SuperOverLeague'
import Social from '../Social'
import Notifications from '../Task5/Notifications'
import Login from '../Task6/Login'
import Cards from '../Task7/Cards'
import { Nav, Navbar, Container } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import { NavDropdown } from 'react-bootstrap'
import FruitCounter from '../hooks/FruitCounter'
import Task1 from '../hooks/Task1'
import JSONCard from '../JSON/JSONCard'


function Route1() {
    return (
        <>
            {/* <BrowserRouter>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Assignments</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={'/helloWorld'}>helloWorld</Nav.Link>
                            <Nav.Link as={Link} to={'/greetCard'}>GreetCard</Nav.Link>
                            <Nav.Link as={Link} to={'/superOverLeague'}>SuperOverLeague</Nav.Link>
                            <Nav.Link as={Link} to={'/social'}>Social</Nav.Link>
                            <Nav.Link as={Link} to={'/notifications'}>Notifications</Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                            <Nav.Link as={Link} to={'/technologyCards'}>technologyCards</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/helloWorld' element={<HelloWorld/>}/>
                    <Route path='/greetCard' element={<GreetCard/>}/>
                    <Route path='/superOverLeague' element={<SuperOverLeague/>}/>
                    <Route path='/social' element={<Social/>} />
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/technologyCards' element={<Cards/>}/>

                </Routes>

            </BrowserRouter> */}
            <BrowserRouter>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Assignments</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={'/helloWorld'}>helloWorld</Nav.Link>
                        <Nav.Link as={Link} to={'/greetCard'}>GreetCard</Nav.Link>
                        <Nav.Link as={Link} to={'/superOverLeague'}>SuperOverLeague</Nav.Link>
                        <Nav.Link as={Link} to={'/social'}>Social</Nav.Link>
                        <Nav.Link as={Link} to={'/notifications'}>Notifications</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        <Nav.Link as={Link} to={'/technologyCards'}>technologyCards</Nav.Link>
                        <Nav.Link as={Link} to={'/fruitcounter'}>FruitCounter</Nav.Link>
                        <Nav.Link as={Link} to={'/buttonCount'}>ButtonCount</Nav.Link>
                        <Nav.Link as={Link} to={'/JSONCard'}>JSON Extract</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path='/helloWorld' element={<HelloWorld />} />
                <Route path='/greetCard' element={<GreetCard />} />
                <Route path='/superOverLeague' element={<SuperOverLeague />} />
                <Route path='/social' element={<Social />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/login' element={<Login />} />
                <Route path='/technologyCards' element={<Cards />} />
                <Route path='/fruitCounter' element={<FruitCounter/>}></Route>
                <Route path='/buttonCount' element={<Task1/>}></Route>
                <Route path='/JSONCard' element={<JSONCard/>}/>
                
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Route1
