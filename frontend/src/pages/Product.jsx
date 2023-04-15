// import data from '../data';
import { useEffect, useReducer, /* useState */ } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action)  => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, product: action.playload, loading: false}
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.playload}
        default:
            return state
    }
}

export default function Product() {
    const params = useParams()
    const { slug } = params

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: false
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get(`/api/products/slug/${slug}`) 
                dispatch({type: 'FETCH_SUCCESS', playload: result.data})
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', playload: err.message})
            }
        }
        fetchData()
    }, [slug])

    return (
       loading ? <div>Loading</div>
       : error ? <div>{error}</div>
       :
        <div>
            <Row className='productPage'>
                <Col md={6}>
                    <img className='img-large' src={product.image} alt={product.name}></img>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush" >
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product.name}</title>
                            </Helmet>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{product.descriptiond}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Para trocar sua roupa com essa entre em contato com o proprietario no <br/> E-Mail: {product.email}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}