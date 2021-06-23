function ShelfItem({item}) {


    console.log('Items in ShelfItem:', item);
    return (
        <li>
            <p>Item: {item.description}</p>
            <img src={item.image_url} alt={item.description} />
        </li>
    )
}

export default ShelfItem;