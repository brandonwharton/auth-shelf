import React from 'react';
import { useDispatch } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';
import { useEffect } from 'react';



function ShelfPage() {
  const dispatch = useDispatch();
  
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
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
