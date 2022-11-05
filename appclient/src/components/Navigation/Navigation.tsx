import React, {FC} from 'react';
import {Button, Container, Form, Image, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import routes from "../../routes";

const Navigation: FC = (): JSX.Element => {
    const history = useNavigate()

    return (
        <Navbar className='bg-light navbar-expand-lg pt-4'>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-block">
                        <Nav.Link href='/' className='w-25 m-auto'>
                            <Image src='https://aws.kiiiosk.store/uploads/shop/2237/favicons/0b178eb0-f926-43b3-9e36-4caf0fcb0810.png' className='w-100'/>
                        </Nav.Link>
                        <div>
                            <Form className="m-auto w-25">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className=""
                                    aria-label="Search"
                                />
                            </Form>
                        </div>
                        <Button className='float-end' variant='dark' onClick={() => history('/basket')}>Корзина</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
