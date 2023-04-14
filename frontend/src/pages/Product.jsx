// import data from '../data';

import { useParams } from "react-router-dom"

export default function Product() {
    const params = useParams()
    const { slug } = params
    return (
        <>
         <h1>{slug}</h1>
        </>
    )
}