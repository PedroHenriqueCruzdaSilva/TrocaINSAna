import { useEffect, useReducer, /* useState */ } from 'react';
// import data from '../data';
import axios from "axios";
import { Link } from 'react-router-dom';
import logger from 'use-reducer-logger';

const reducer = (state, action)  => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, products: action.playload, loading: false}
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.playload}
        default:
            return state
    }
}

export default function Home() {
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: false
    })
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get('/api/products') 
                dispatch({type: 'FETCH_SUCCESS', playload: result.data})
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', playload: err.message})
            }
            // setProducts(result.data)
        }
        fetchData()
    }, [])
    return (
        <>
          <h1 className='H1h'>Em destaque</h1>
            <div className="products">
                {
                loading ? (
                    <div> Loading. </div>
               ) : error ? ( 
                <div> {error} </div> 
               ) : (products.map((product) => (
                    <div className="product" key={product.slug}>
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} widht="300px" height="300px" />
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
                ) }
            </div>
          </>
    )
}