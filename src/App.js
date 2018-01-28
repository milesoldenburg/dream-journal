import React, {Component} from 'react';
import {Grid, Nav, Navbar, NavItem} from 'react-bootstrap';
import Dream from './Dream';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Dream Journal</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Tags
                            </NavItem>
                        </Nav>
                    </Grid>
                </Navbar>
                <Dream/>
            </div>
        );
    }
}

export default App;
