import { useEffect, useState } from "react";
import {IProduct} from "./Product.type"

type Props={
    data:IProduct
    onBackBtnClickHnd:()=>void;
    onUpdateClickHnd:(data:IProduct)=>void
}

const EditProduct=(props:Props)=>{
 const{data,onBackBtnClickHnd,onUpdateClickHnd}=props;

 const [productName, setProductName] = useState(data.name);
  const [quantity, setQuantity] = useState(data.quantity);
  const [unitPrice, setUnitPrice] = useState(data.price);

  const [productObj, setProductObj] = useState({quantity:0,price:0,name:''});


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    console.log(val, 'val here')
    setProductObj((state) => {
      return ({...state,[e.target.id]:e.target.value})


    })

  }

  
  const onProductNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e, 'see here')
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
    const updatedData: IProduct = {
      id:data.id,
      name: productName,
      quantity: quantity,
      price: unitPrice,
      created_date: new Date(),
      updated_date: new Date(),
      user_id: '1', 
    };
    console.log('Adding product:', data);
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd()
  };

  useEffect( () => {

    console.log('productObj',productObj)
  } , [productObj])

 return(
    <form onSubmit={onSubmitBtnClickHnd} className="row g-3">
    <div className="col-md-12">
      <label className="form-label">Name:</label>
      <input className="form-control"
      id="name"
        type="text"
        value={productObj.name}
        onChange={onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Quantity:</label>
      <input className="form-control"
        type="number"
        id='quantity'
        value={productObj.quantity}
        onChange={onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Unit Price:</label>
      <input className="form-control"
      id="price"

        type="number"
        value={productObj.price}
        onChange={onChange}
      />
    </div>
    <div>
      <input className="btn btn-danger" type="button" value="Cancel" onClick={onBackBtnClickHnd} />
      <input className="btn btn-primary" type="submit" value="Update" />
    </div>
  </form>
 )
}

export default EditProduct;