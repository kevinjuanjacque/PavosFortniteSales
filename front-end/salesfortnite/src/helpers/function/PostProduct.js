import { useEffect, useState } from 'react'

export const AddProduct = () => {
    const [Elements, setElements] = useState({
        loading: true,
        data: ''
    });

    useEffect(() => {
        fetch( 'http://localhost:4000/api/' )
    })

}