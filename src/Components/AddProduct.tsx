

import { useState } from 'react';
import { IProduct } from './Product.type';

type Props = {
  onBackBtnClickedHnd: () => void;
  onSubmitClickHnd: (data: IProduct) => void;
};

const AddProduct = (props: Props) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const { onBackBtnClickedHnd, onSubmitClickHnd } = props;

  const onProductNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const onQuantityChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const onUnitPriceChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitPrice(Number(e.target.value));
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IProduct = {
      id: new Date().toJSON().toString(),
      name: productName,
      quantity: quantity,
      price: unitPrice,
      created_date: new Date(),
      updated_date: new Date(),
      user_id: '1', 
    };
    console.log('Adding product:', data);
    onSubmitClickHnd(data);
  };

  return (
    <>
 

<h2 className='text-success'>Add Products</h2>
<form className="row g-3 " onSubmit={onSubmitBtnClickHnd}>
        <div className='col-md-12'>
          <label className='form-label'>Name:</label>
          <input className='form-control'
            type="text"
            value={productName}
            onChange={onProductNameChangeHnd}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Quantity:</label>
          <input className='form-control'
            type="number"
            value={quantity}
            onChange={onQuantityChangeHnd}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Unit Price:</label>
          <input className='form-control'
            type="number"
            value={unitPrice}
            onChange={onUnitPriceChangeHnd}
          />
        </div>
        <div>
          <input className='btn btn-warning' type="button" value="Cancel" onClick={onBackBtnClickedHnd} />
          <input className='btn btn-primary' type="submit" value="Add Product" />
        </div>
      </form>

    </> 
  );
};

export default AddProduct;
