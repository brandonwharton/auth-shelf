import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm';



function ShelfPage() {
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
