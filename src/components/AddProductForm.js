import React, { useState, useContext } from 'react'
import ProductsContext from '../context/ProductsContext'

const AddProductForm = ({closeModal}) => {
    const { dispatch } = useContext(ProductsContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addProduct = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_PRODUCT',
            title,
            body
        })
        setTitle('')
        setBody('')
        closeModal()
    }

    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={addProduct}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} /><br></br>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea><br></br>
                <button>add note</button>
            </form>
        </>
    )
}

export { AddProductForm as default }