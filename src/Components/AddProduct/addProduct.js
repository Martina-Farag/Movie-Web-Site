import React from 'react';
import { useOutletContext } from 'react-router-dom';

const AddProduct = () => {
         
  const [counter,setCounter] = useOutletContext();
//   console.log(x);
    return (
        <div>
            Add Product {counter}
        </div>
    );
}

export default AddProduct;
