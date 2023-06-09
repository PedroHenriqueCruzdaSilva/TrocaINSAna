import { useEffect, useReducer, /* useState */ } from 'react';
// import data from '../data';
import axios from "axios";
// import { Link } from 'react-router-dom';
import Product from '../components/Product';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
            <Helmet>
                <title>Troca INSAna</title>
            </Helmet>
          <h1 className='H1h'>Em destaque</h1>
            <div className="products">
                {
                loading ? (
                    <LoadingBox />
               ) : error ? ( 
                <MessageBox  variant="danger">{error}</MessageBox> 
               ) : (
                <Row className='rowc'>
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
                ) }
            </div>
          </>
    )
}