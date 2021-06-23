import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function ShelfForm() {
    //declare dispatch
    const dispatch = useDispatch();

    //create local states to capture user input
    let [description, setDescription] = useState('')
    let [url, setUrl] = useState('')
    
    //bring in user reducer from store
    const user = useSelector((store) => store.user);
    
    //create a function that will send user data to redux saga 
    const handleSubmit = (event) => {
        event.preventDefault();
    //dispatch object
        dispatch({ type: 'POST_ITEM',
        payload: {
            description: description,
            image_url: url,
            user_id: user.id
            }
        })
    //clear input fields
         setDescription('');
         setUrl('');
    }

    return (
        <>
        <h2>Add item to the shelf!</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Description"
            value={description} 
            onChange={(evt) => setDescription(evt.target.value) } />
            <input 
            type="text" 
            placeholder="Image URL"
            value={url} 
            onChange={(evt) => setUrl(evt.target.value)} />
            <button type="submit">Add Item</button>
        </form>
        </>
    )
}

export default ShelfForm;