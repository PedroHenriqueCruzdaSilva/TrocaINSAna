import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signin() {
    const { search } = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <Container className="small-container">
            <Helmet>
                <title>Logar</title>
            </Helmet>
            <h1 className='my-3'>
                Login
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Insira seu E-Mail no campo abaixo</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Insira sua Senha no campo abaixo</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <div className='mb-3'>
                    <Button variant='warning' type="submit">Logar</Button>
                </div>
                <div className='mb-3'>
                    Novo usuario?{' '}
                    <Link to={`/singup?redirect=${redirect}`}>Crie uma conta!</Link>
                </div>
            </Form>
        </Container>
    )
}