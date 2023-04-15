import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function Product(props) {
    const { product } = props
    return (
        <Card>
            <Link to={`/product/${product.slug}`}>
                <img className="card-img-top" src={product.image} alt={product.name} widht="300px" height="300px" />
            </Link>
            <Card.Body>
                <Link className="nameL" to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>E-mail para troca abaixo:</Card.Text>
                <strong>{product.email}</strong>
            </Card.Body>
        </Card>
    )
}