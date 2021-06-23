import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useEffect } from 'react';



function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);

  useEffect( () => {
    dispatch({
      type:'FETCH_SHELF'
    });
  }, []);

  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />

       {/* All GET route team changes below here*/}
       {shelf.map(item => (
         <ShelfItem key={item.id} item={item} />
       ))}
      
    </div>
  );
}

export default ShelfPage;
