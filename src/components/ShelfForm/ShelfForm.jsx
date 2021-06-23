import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function ShelfForm() {

    const dispatch = useDispatch();
    
    let [description, setDescription] = useState('')
    let [url, setUrl] = useState('')

    const user = useSelector((store) => store.user);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({ type: 'POST_ITEM',
        payload: {
            description: description,
            image_url: url,
            user_id: user.id
            
        }
         })
        
         setDescription('');
         setUrl('');
    }

    return (
        <>
        <h2>Add item to the shelf!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Description"
            value={description} 
            onChange={() => setDescription(evt.target.value) } />
            <input 
            type="text" 
            placeholder="Image URL"
            value={url} 
            onChange={() => setUrl(evt.target.value)} />
            <button type="submit">Add Item</button>
        </form>
        </>
    )
}

export default ShelfForm;