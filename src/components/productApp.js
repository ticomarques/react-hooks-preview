import React, { useState, useEffect, useReducer } from 'react'


//context and reducer
import productsReducer from '../reducers/products'
import ProductsContext from '../context/ProductsContext'

//components
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

import Modal from 'react-modal';

const ProductApp = () => {
    
    const [products, dispatch] = useReducer(productsReducer, [])


    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () =>{
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }



    //esse hook abaixo vai rodar quando montar pela primeira vez (componentDidMount)
    //ele vai no localstorage e traz os dados, depois joga no state
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'))

        if (products) {
            dispatch({ type: 'POPULATE_PRODUCTS', products })
        }
    }, [])

    //Esse hook abaixo vai rodar quando o state products sofrer alguma alteracao
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])



    return (
        <ProductsContext.Provider value={{ products, dispatch }}>
            <div className="container">
                <h1 className="mainTitle">Products</h1>
                <ProductList products={products}/>
                <button onClick={openModal}>Add</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Edit modal"
            >
                <button onClick={closeModal}>close</button>
                <AddProductForm closeModal={closeModal}/>
            </Modal>
        </ProductsContext.Provider>
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

export { ProductApp as default }