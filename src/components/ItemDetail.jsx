import React from "react";


const ItemDetail = ({ prenda }) => {

    // estilos al item
    const cardStyle = {
        backgroundColor: '#f4f4f4',
        border: '1px solid #e1e1e1',
        margin: '0 10px 10px 0',
        display: 'inline-block',
        verticalAlign: 'top',
        position: 'relative',
        textAlign: 'center',
        padding: '10px',
        boxSizing: 'border-box',
        fontSize: '12px',
        lineHeight: '1.2',
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        borderRadius: '3px',
    }
    
    const cardImg = {
        width: '600px',
    }

    return (
        <>
            <div className="item" style={cardStyle}>
                <div className="item-info">
                <img style={cardImg} src={prenda.img} alt="prenda.title" />
                    <h3>{prenda.title}</h3>
                    <p>${prenda.precio}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;