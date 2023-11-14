import { useState } from 'react';
import { IProduct } from './Product.type';

type Props = {
  onBackBtnClickedHnd: () => void;
  onSubmitClickHnd: (data: IProduct) => void;
};

const AddProduct = (props: Props) => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: 1,
    unitPrice: 1,
  });

  const { onBackBtnClickedHnd, onSubmitClickHnd } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Custom validation for special characters in product name
    const sanitizedValue = id === 'productName' ? value.replace(/[^a-zA-Z0-9\s]/g, '') : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === 'quantity' || id === 'unitPrice' ? (Number(sanitizedValue) > 0 ? Number(sanitizedValue) : 1) : sanitizedValue,
    }));
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the product name is empty
    if (!formData.productName.trim()) {
      alert("Product name cannot be empty");
      return;
    }

    const data: IProduct = {
      id: new Date().toJSON().toString(),
      name: formData.productName,
      quantity: formData.quantity,
      price: formData.unitPrice,
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
          <input
            className='form-control'
            type="text"
            id="productName"
            value={formData.productName}
            onChange={onChange}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Quantity:</label>
          <input
            className='form-control'
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={onChange}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Unit Price:</label>
          <input
            className='form-control'
            type="number"
            id="unitPrice"
            value={formData.unitPrice}
            onChange={onChange}
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











import { useState } from 'react';
import { IProduct } from './Product.type';

type Props = {
  onBackBtnClickedHnd: () => void;
  onSubmitClickHnd: (data: IProduct) => void;
};

const AddProduct = (props: Props) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1); // Default to 1 to disallow 0
  const [unitPrice, setUnitPrice] = useState(1); // Default to 1 to disallow 0

  const { onBackBtnClickedHnd, onSubmitClickHnd } = props;

  const onProductNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const onQuantityChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value > 0 ? value : 1); // Ensure quantity is at least 1
  };

  const onUnitPriceChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUnitPrice(value > 0 ? value : 1); // Ensure unit price is at least 1
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the product name is empty
    if (!productName.trim()) {
      alert("Product name cannot be empty");
      return;
    }

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
          <input
            className='form-control'
            type="text"
            value={productName}
            onChange={onProductNameChangeHnd}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Quantity:</label>
          <input
            className='form-control'
            type="number"
            value={quantity}
            onChange={onQuantityChangeHnd}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Unit Price:</label>
          <input
            className='form-control'
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
