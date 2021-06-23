import { useDispatch } from "react-redux";

function ShelfItem({item}) {
    const dispatch = useDispatch();

    const handleDelete = (item) =>{
        dispatch({type: 'REMOVE_ITEM', payload: item})
    }

    console.log('Items in ShelfItem:', item);
    return (
        <li>
            <p>Item: {item.description}</p>
            <img src={item.image_url} alt={item.description}/>
            <button onClick={() => handleDelete(item)}>Delete</button> 
        </li>
    )
}

export default ShelfItem;