function ShelfItem({item}) {


    console.log('Items in ShelfItem:', item);
    return (
        <>
            <p>Item: {item.description}</p>
            <img src={item.image_url} alt={item.description} />
        </>
    )
}

export default ShelfItem;