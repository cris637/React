const Item = ({ ropa }) => {

    // estilos al item
    const cardStyle = {
        width: '100px',
        height: '100px',
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

    return (
        <>
            <div className="item" style={cardStyle}>
                <div className="item-info">
                    <img src={ropa.img} alt={ropa.title} />
                    <h3>{ropa.title}</h3>
                    <p>${ropa.precio}</p>
                </div>
            </div>
        </>
    )
}

export default Item;