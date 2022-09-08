import React, {FC} from 'react';
import {Container, Form, Image, Nav, Navbar} from "react-bootstrap";

const Navigation: FC = () => {
    return (
        <Navbar className='bg-light navbar-expand-lg pt-4'>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='https://yumms.store/' className='text-center'>
                            <Image src='https://aws.kiiiosk.store/uploads/shop/2237/favicons/0b178eb0-f926-43b3-9e36-4caf0fcb0810.png' className='w-25'/>
                        </Nav.Link>
                        {/*<div className='flex'>*/}
                        {/*    <Form className="d-block">*/}
                        {/*        <Form.Control*/}
                        {/*            type="search"*/}
                        {/*            placeholder="Search"*/}
                        {/*            className=""*/}
                        {/*            aria-label="Search"*/}
                        {/*        />*/}
                        {/*    </Form>*/}
                        {/*</div>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;