import data from '../data';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
          <h1>Em destaque</h1>
            <div className="products">
                {
                data.products.map((product) => (
                    <div className="product" key={product.slug}>
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} widht="250px" height="250px" />
                    </Link>
                    <div className="product-info">
                        <Link to={`/product/${product.slug}`}>
                        <p className="product-info_name">{product.name}</p>
                        </Link>
                        <p className="product-info_desc">{product.description}</p>
                        <p className="product-info_email">E-mail para troca abaixo:</p>
                        <strong>{product.email}</strong>
                    </div>
                    </div>
                ))
                }
            </div>
          </>
    )
}