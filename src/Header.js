import React from 'react'
import './Header.css'
import { useProductValue } from './ContextAPI';
import { Link } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'

function Header() {
    const [products, setProducts] = useProductValue();
    return (
        <div className='header'>
            <Container fluid className='container'>
                <Row>
                    <Col>
                        <Link to='/'>
                            <div className='logo'>
                                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' className='img__logo' alt='logo' />
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Control className='form-inline' type="text" placeholder="Search" />
                        </Form>
                    </Col>
                    <Col>
                        <div className='nav__right'>
                            <div className='par'>
                                <p className='first__p'><Link to='/signin'>Hello, Sign in </Link><div className='first__div'>Account & Lists</div></p>
                                <p className='second__p'>Returns <div className='second__div'>& Orders</div></p>
                            </div>
                            <div>
                                <Link to='basket'>{products.length}</Link>
                                {/* <a href='/basket'>BASKET</a> {products.length} */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header