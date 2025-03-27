import React from 'react'
import { withEmptyLabel } from './withEmptyLabel'

function ProductList({ items }) {

    // if (!items || items.length === 0) {
    //     return <p>List is empty!</p>
    // }
    return (
        <>
            <h2>Product List</h2>
            <ul className='product-list'>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default withEmptyLabel(ProductList, 'products')