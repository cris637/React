// Importar la data de ropa
import data from '../data/ropaData.js';
import Item from './Item.jsx';

const ItemList = () => {
    
    return (
        <>
            {data.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </>
    )
}

export default ItemList;