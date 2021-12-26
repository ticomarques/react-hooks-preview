import React, { useState, useContext } from 'react'
import ProductsContext from '../context/ProductsContext'
import Modal from 'react-modal';

const Product = ({ product }) => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const { dispatch } = useContext(ProductsContext)
    const [modalIsOpen, setIsOpen] = useState();

    const handleRemoveProduct = (id) => {
        dispatch({ type: 'REMOVE_PRODUCT', id })
    }
    const editProduct = (e) => {
        e.preventDefault()
        dispatch({
            type: 'EDIT_PRODUCT',
            id: product.id,
            title,
            body
        })
        setIsOpen(false);
    }

    return (
        <div className="card">
            <small>{product.id}</small>
            <h3>{product.title}</h3>
            <p>{product.body}</p>
            <button onClick={()=>{setIsOpen(true)}}>edit</button>
            <button onClick={() => handleRemoveProduct(product.id)}>x</button>


            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Edit modal"
            >
                <button onClick={() => setIsOpen(false)}>close</button>

                <h1>Edit Product</h1>
                <form onSubmit={editProduct}>
                    <input placeholder={product.title} onChange={(e) => setTitle(e.target.value)} /><br></br>
                    <textarea placeholder={product.body} onChange={(e) => setBody(e.target.value)}></textarea><br></br>
                    <button>edit</button>
                </form>
            </Modal>
        </div>
    )
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

export { Product as default }